import express from 'express';
import http from 'http';
import redux from 'redux';
import lobbyReducer from './reducers/lobbyReducer.js';
import ws from 'ws';

import mapValues from '../util/mapValues.js';
import filterValues from '../util/filterValues.js';

import { needsRoomPermission } from '../actions/actions.js';

const store = redux.createStore(lobbyReducer);

// RESTful API
const api = express();
api.use(express.json());

const redact = room => filterValues(room, (v, key) => !['passcode'].includes(key));

api.post('/api/action', (req, res) => {
    const { type, passcode, room: roomId } = req.body;
    if (roomId == null) {
        res.status(400).send({ error: 'Must provide room ID' });
        return;
    }
    const room = store.getState()[roomId];
    if (needsRoomPermission.has(type) && (passcode == null || room.passcode !== passcode)) {
        res.status(403).send({ error: `Passcode incorrect for room ${roomId}`});
        return;
    }

    store.dispatch(req.body);
    res.send(redact(store.getState()[roomId]));
});
api.get('/api/state/:room', (req, res) => {
    const { room: roomId } = req.params;
    if (roomId == null) {
        res.status(400).send({ error: 'Must provide room ID' });
        return;
    }
    const room = store.getState()[roomId];
    if (room == null) {
        res.status(404).send({ error: `No such room ${roomId}` });
        return;
    }
    res.send(redact(room));
});
api.listen(8080);

console.log('REST API listening on 8080');

// Realtime API
const rt = http.createServer();
const wss = new ws.Server({ server: rt });

wss.on('connection', (socket, req) => {
    socket.room = req.url.slice(1);
    console.log('Someone listening for ', socket.room);
});

let prevState = {};
store.subscribe(() => {
    const state = store.getState();
    const changed = filterValues(state, (newState, key) => prevState[key] !== newState);
    const updates = mapValues(changed, s => JSON.stringify(s));
    prevState = state;
    wss.clients.forEach(socket => {
        if (updates.hasOwnProperty(socket.room)) {
            socket.send(updates[socket.room]);
        }
    });
});

rt.listen(8081);
console.log('Realtime API listening on 8081');

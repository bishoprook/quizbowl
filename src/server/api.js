import express from 'express';
import http from 'http';
import redux from 'redux';
import lobbyReducer from './reducers/lobbyReducer.js';
import ws from 'ws';

import mapValues from '../util/mapValues.js';
import filterValues from '../util/filterValues.js';

import checkRoomId from './middleware/checkRoomId.js';
import checkPasscode from './middleware/checkPasscode.js';

import ApiError from './errors/ApiError.js';

const store = redux.createStore(lobbyReducer, {}, redux.applyMiddleware(checkRoomId, checkPasscode));

// RESTful API
const api = express();
api.use(express.json());

const redact = room => filterValues(room, (v, key) => !['passcode'].includes(key));

api.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
api.post('/api/action', (req, res) => {
    const { room: roomId } = req.body;
    store.dispatch(req.body);
    res.send(redact(store.getState()[roomId]));
});
api.get('/api/state/:room', (req, res) => {
    const { room: roomId } = req.params;
    const room = store.getState()[roomId];
    if (room == null) {
        throw new ApiError(404, `No such room ${roomId}`);
    }
    res.send(redact(room));
});
api.use((err, req, res, next) => {
    if (err instanceof ApiError) {
        console.error(err.stack);
        res.status(err.statusCode).send(err.body);
    }
    else {
        next(err);
    }
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
    const updates = mapValues(changed, s => JSON.stringify(redact(s)));
    prevState = state;
    wss.clients.forEach(socket => {
        if (updates.hasOwnProperty(socket.room)) {
            socket.send(updates[socket.room]);
        }
    });
});

rt.listen(8081);
console.log('Realtime API listening on 8081');

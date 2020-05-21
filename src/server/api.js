import express from 'express';
import http from 'http';
import redux from 'redux';
import lobbyReducer from './reducers/lobbyReducer.js';
import ws from 'ws';

const store = redux.createStore(lobbyReducer);

// RESTful API
const api = express();
api.use(express.json());

api.post('/api', (req, res) => {
    console.log('Got request: ', req.body);
    store.dispatch(req.body);
    res.send(store.getState());
});
api.get('/api', (req, res) => res.send(store.getState()));
api.listen(8080);

// Realtime API
const rt = http.createServer();
const wss = new ws.Server({ server: rt });

wss.on('connection', (socket, req) => {
    socket.room = req.url.slice(1);
    console.log('Someone listening for ', socket.room);
});

store.subscribe(() => {
    const states = store.getState()
    const state = JSON.stringify(store.getState());
    wss.clients.forEach(client => {
        client.send(state);
    });
});

rt.listen(8081);

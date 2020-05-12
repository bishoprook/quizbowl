import express from 'express';
import http from 'http';
import ws from 'ws';

import rootReducer from './server/reducers/rootReducer.js';
import redux from 'redux';
const store = redux.createStore(rootReducer);

console.log('Initial state: ', store.getState());
store.subscribe(() => console.log('New state: ', store.getState()));

const api = express();
api.use(express.json());

/*const server = http.createServer(api);
const wss = new ws.Server({ server });

wss.on('connection', conn => {

    conn.on('message', message => {
        console.log()
        conn.send(`Hi ${message}`);
    });

    conn.send('Logged on, who dis');
});

server.listen(8080);*/

api.post('/api/:roomId', (req, res) => {
    store.dispatch(req.body);
    res.send(store.getState());
});

api.get('/api/:roomId', (req, res) => res.send(store.getState()));

api.listen(8080);

import express from 'express';
import filterValues from '../util/filterValues.js';

import ApiError from './errors/ApiError.js';

const rest = store => {
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
}

export default rest;
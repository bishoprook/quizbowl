import http from 'http';
import ws from 'ws';

const server = http.createServer();
const wss = new ws.Server({ server });

wss.on('connection', conn => {

    conn.on('message', message => {
        console.log()
        conn.send(`Hi ${message}`);
    });

    conn.send('Logged on, who dis');
});

server.listen(8080);

api.post('/api/:roomId', (req, res) => {
    store.dispatch(req.body);
    res.send(store.getState());
});

api.get('/api/:roomId', (req, res) => res.send(store.getState()));

api.listen(8080);

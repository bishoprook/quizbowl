import express from 'express';

const restful = store => {
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
    
    api.post('/api', (req, res) => {
        store.dispatch(req.body);
        res.send(store.getState());
    });
    
    api.get('/api', (req, res) => res.send(store.getState()));
    
    api.listen(8080);
};

export default restful;
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Admin from './Admin';
import Player from './Player';
import Spectator from './Spectator';

import RoomProvider from './RoomProvider.js';

const AdminRoute = ({ match: { params: { room } } }) =>
    <RoomProvider room={room}><Admin /></RoomProvider>;

const PlayerRoute = ({ match: { params: { room } } }) =>
    <RoomProvider room={room}><Player /></RoomProvider>;

const SpectatorRoute = ({ match: { params: { room } } }) =>
    <RoomProvider room={room}><Spectator /></RoomProvider>;

class Root extends React.PureComponent {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/admin/:room" component={AdminRoute} />
                    <Route path="/player/:room" component={PlayerRoute} />
                    <Route path="/:room" component={SpectatorRoute} />
                </Switch>
            </Router>
        )
    }
}

export default Root;

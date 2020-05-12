import React from 'react';

import { Provider } from 'react-redux';

import Admin from './Admin';
import Spectator from './Spectator';
import Player from './Player';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/admin" component={Admin} />
                <Route path="/:name" component={Player} />
                <Route path="/" component={Spectator} />
            </Switch>
        </Router>
    </Provider>
);

export default Root;

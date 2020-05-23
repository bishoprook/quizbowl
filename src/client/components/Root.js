import React from 'react';

//import { Provider } from 'react-redux';

import Admin from './Admin';
import Player from './Player';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Spectator from './Spectator';

/*const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/admin" component={Admin} />
                <Route path="/" component={Player} />
            </Switch>
        </Router>
    </Provider>
);*/

const Root = () => (
    <Router>
        <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/:room" component={Spectator} />
            <Route path="/" component={Player} />
        </Switch>
    </Router>
);

export default Root;

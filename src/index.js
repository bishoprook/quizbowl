import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Admin from './components/Admin';
import rootReducer from './reducers';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <Admin />
    </Provider>,
    document.getElementById('root')
);
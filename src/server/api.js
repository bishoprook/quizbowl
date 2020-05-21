import restful from './restful.js';
import roomReducer from './reducers/roomReducer.js';

import redux from 'redux';

const store = redux.createStore(roomReducer);

restful(store);
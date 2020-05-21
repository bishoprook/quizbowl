import rootReducer from './reducers/rootReducer.js';
import { createStore } from 'redux';

const store = context => createStore(rootReducer(context), {});

export default store;
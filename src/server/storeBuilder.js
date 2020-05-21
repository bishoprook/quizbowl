import roomReducer from './reducers/roomReducer.js';
import { createStore } from 'redux';

const storeBuilder = () => createStore(roomReducer);

export default storeBuilder;
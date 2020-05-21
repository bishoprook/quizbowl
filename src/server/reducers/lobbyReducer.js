import { actionTypes } from '../../actions/actions.js';
import roomReducer from './roomReducer.js';
import mapValues from '../../util/mapValues.js';

const lobbyReducer = (state = {}, action) => {
    const { room: roomId } = action;
    switch (action.type) {
        case actionTypes.CREATE:
            return Object.assign({}, { [roomId]: roomReducer({ id: roomId }, action) }, state);
        default:
            return mapValues(state, room => roomReducer(room, action));
    }
}

export default lobbyReducer;
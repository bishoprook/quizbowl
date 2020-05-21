import { actionTypes } from '../../actions/actions.js';
import roomReducer from './roomReducer.js';

const lobbyReducer = (state = {}, action) => {
    const { room: roomId } = action;
    switch (action.type) {
        case actionTypes.CREATE:
            return Object.assign({}, { [roomId]: roomReducer({ id: roomId }, action) }, state);
        default:
            return state.hasOwnProperty(roomId) ?
                Object.assign({}, state, { [roomId]: roomReducer(state[roomId], action) }) :
                state;
    }
}

export default lobbyReducer;
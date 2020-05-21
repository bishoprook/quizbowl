import { actionTypes } from '../../actions/actions.js';

const buzzedReducer = (state = null, action, players = []) => {
    switch (action.type) {
        case actionTypes.BUZZ:
            const { name } = action;
            return state == null && players.includes(name) ? name : state;
        case actionTypes.CLEAR_BUZZER:
            return null;
        default:
            return state;
    }
};

export default buzzedReducer;
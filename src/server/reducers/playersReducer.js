import { actionTypes } from '../../actions/actions.js';

const playersReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_PLAYER:
            const { name } = action;
            return state.includes(name) ? state : [...state, name];
        default:
            return state;
    }
};

export default playersReducer;
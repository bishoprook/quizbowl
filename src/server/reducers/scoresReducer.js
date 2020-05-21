import { actionTypes } from '../../actions/actions.js';

const scoresReducer = (state = {}, action) => {
    const { name, amount, score } = action;
    switch (action.type) {
        case actionTypes.ADD_PLAYER:
            return state.hasOwnProperty(name) ? state : { [name]: 0, ...state };
        case actionTypes.ADD_POINTS:
            return state.hasOwnProperty(name) ? { ...state, [name]: state[name] + amount } : state;
        case actionTypes.REMOVE_POINTS:
            return state.hasOwnProperty(name) ? { ...state, [name]: state[name] - amount } : state;
        case actionTypes.SET_SCORE:
            return state.hasOwnProperty(name) ? { ...state, [name]: score } : state;
        default:
            return state;
    }
};

export default scoresReducer;

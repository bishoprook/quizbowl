import { actionTypes } from '../../actions/actions.js';
import showQuestionReducer from './showQuestionReducer.js';
import addQuestionReducer from './addQuestionReducer.js';

const roomReducer = context => (previousState, action) => {
    switch (action.type) {
        case actionTypes.ADD_QUESTION:
            return addQuestionReducer(context)(previousState, action);
        case actionTypes.SHOW_QUESTION:
            return showQuestionReducer(context)(previousState, action);
        default:
            return previousState;
    }
};

export default roomReducer;
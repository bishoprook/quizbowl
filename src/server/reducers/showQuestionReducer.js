const showQuestionReducer = () => (previousState, action) => {
    return previousState.questionIds.length > action.index && action.index >= 0 ?
        Object.assign({}, previousState, { showing: action.index }) :
        previousState;
};

export default showQuestionReducer;
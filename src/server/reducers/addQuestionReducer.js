import deepMerge from '../../util/deepMerge.js';

const addQuestionReducer = ({ idGenerator }) => (previousState, action) => {
    const id = idGenerator({ forbid: previousState.questionIds });

    const { room, text } = action;
    return deepMerge(previousState, {
        questionIds: [id],
        questions: {
            [id]: { id, text }
        }
    });
};

export default addQuestionReducer;
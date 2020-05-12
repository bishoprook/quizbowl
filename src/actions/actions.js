export const actionTypes = {
    CREATE: 'create',
    ADD_QUESTION: 'addQuestion',
    SHOW_QUESTION: 'showQuestion'
}

export const buzz = actor => ({ type: 'BUZZ', actor });
export const clear = () => ({ type: 'CLEAR' });

export function create(passcode, players) {
    return { type: actionTypes.CREATE, passcode, players };
};

export function addQuestion(room, text) {
    return { type: actionTypes.ADD_QUESTION, room, text };
};

export function showQuestion(room, index) {
    return { type: actionTypes.SHOW_QUESTION, room, index };
};

export const actionScopes = {
    ROOT: 'root',
    ROOM: 'room'
};

export const actionTypes = {
    CREATE: 'create',
    ADD_QUESTION: 'addQuestion',
    SHOW_QUESTION: 'showQuestion'
};

export const typesToScopes = {
    [actionTypes.CREATE]: actionScopes.ROOT,
    [actionTypes.ADD_QUESTION]: actionScopes.ROOM,
    [actionTypes.SHOW_QUESTION]: actionScopes.ROOM
};

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

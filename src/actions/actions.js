export const actionTypes = {
    CREATE: 'create',
    ADD_QUESTION: 'addQuestion',
    SHOW_QUESTION: 'showQuestion',
    ADD_PLAYER: 'addPlayer',
    BUZZ: 'buzz',
    CLEAR_BUZZER: 'clearBuzzer',
    ADD_POINTS: 'addPoints',
    REMOVE_POINTS: 'removePoints',
    SET_SCORE: 'setScore'
};

export function create(room) {
    return { type: actionTypes.CREATE, room };
};

export function addQuestion(room, text, index = undefined) {
    return { type: actionTypes.ADD_QUESTION, room, text, index };
};

export function showQuestion(room, index) {
    return { type: actionTypes.SHOW_QUESTION, room, index };
};

export function addPlayer(room, name) {
    return { type: actionTypes.ADD_PLAYER, room, name };
};

export function buzz(room, name) {
    return { type: actionTypes.BUZZ, room, name };
};

export function clearBuzzer(room) {
    return { type: actionTypes.CLEAR_BUZZER, room };
};

export function addPoints(room, name, amount = 1) {
    return { type: actionTypes.ADD_POINTS, room, name, amount };
};

export function removePoints(room, name, amount = 1) {
    return { type: actionTypes.REMOVE_POINTS, room, name, amount };
};

export function setScore(room, name, score) {
    return { type: actionTypes.SET_SCORE, room, name, score };
};

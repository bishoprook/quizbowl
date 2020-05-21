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

export function create(passcode, players) {
    return { type: actionTypes.CREATE, passcode, players };
};

export function addQuestion(text, index = undefined) {
    return { type: actionTypes.ADD_QUESTION, text, index };
};

export function showQuestion(index) {
    return { type: actionTypes.SHOW_QUESTION, index };
};

export function addPlayer(name) {
    return { type: actionTypes.ADD_PLAYER, name };
};

export function buzz(name) {
    return { type: actionTypes.BUZZ, name };
};

export function clearBuzzer() {
    return { type: actionTypes.CLEAR_BUZZER };
};

export function addPoints(name, amount = 1) {
    return { type: actionTypes.ADD_POINTS, name, amount };
};

export function removePoints(name, amount = 1) {
    return { type: actionTypes.REMOVE_POINTS, name, amount };
};

export function setScore(name, score) {
    return { type: actionTypes.SET_SCORE, name, score };
};

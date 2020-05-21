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

export const needsRoomPermission = new Set([
    actionTypes.ADD_QUESTION,
    actionTypes.SHOW_QUESTION,
    actionTypes.CLEAR_BUZZER,
    actionTypes.ADD_POINTS,
    actionTypes.REMOVE_POINTS,
    actionTypes.SET_SCORE
]);

export function create(room, passcode) {
    return { type: actionTypes.CREATE, room, passcode };
};

export function addQuestion(room, passcode, text, index = undefined) {
    return { type: actionTypes.ADD_QUESTION, room, passcode, text, index };
};

export function showQuestion(room, passcode, index) {
    return { type: actionTypes.SHOW_QUESTION, room, passcode, index };
};

export function addPlayer(room, name) {
    return { type: actionTypes.ADD_PLAYER, room, name };
};

export function buzz(room, name) {
    return { type: actionTypes.BUZZ, room, name };
};

export function clearBuzzer(room, passcode) {
    return { type: actionTypes.CLEAR_BUZZER, room, passcode };
};

export function addPoints(room, passcode, name, amount = 1) {
    return { type: actionTypes.ADD_POINTS, room, passcode, name, amount };
};

export function removePoints(room, passcode, name, amount = 1) {
    return { type: actionTypes.REMOVE_POINTS, room, passcode, name, amount };
};

export function setScore(room, passcode, name, score) {
    return { type: actionTypes.SET_SCORE, room, passcode, name, score };
};

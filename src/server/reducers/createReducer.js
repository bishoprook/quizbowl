import deepMerge from '../../util/deepMerge.js';

const emptyRoom = { questionIds: [], questions: {}, showing: null, buzzed: null };

const createReducer = ({ idGenerator }) => (previousState = {}, action) => {
    const id = idGenerator({ forbid: previousState.roomIds });

    const { passcode, players: playerIds } = action;
    const scores = playerIds.reduce((s, p) => ({ [p]: 0, ...s }), {});
    return deepMerge(previousState, {
        roomIds: [id],
        rooms: {
            [id]: { id, passcode, playerIds, scores, ...emptyRoom }
        }
    });
}

export default createReducer;
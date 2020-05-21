import { actionTypes, actionScopes, typesToScopes } from '../../actions/actions.js';
import createReducer from './createReducer.js';
import roomReducer from './roomReducer.js';
import deepMerge from '../../util/deepMerge.js';

//import turn from './turn.js';

//export default redux.combineReducers({ turn });

// Ongoing state:
// {
//   roomIds: ['quwr'],
//   rooms: {
//   'roomId': {
//   id: 'quwr',
//   passcode: 'fawcar',
//   playerIds: ['dan', 'katie'],
//   scores: { dan: 10, katie: 12 },
//   questionIds: ['abc', 'abd'],
//   questions: {abc: {text: 'foo'}, abd: {text: 'bar'}},
//   showing: 1,
//   buzzed: null
// }
//}}



const rootReducer = context => (previousState, action) => {
    switch (action.type) {
        case actionTypes.CREATE:
            return createReducer(context)(previousState, action);
    }

    switch (typesToScopes[action.type]) {
        case actionScopes.ROOM:
            const { room: roomId } = action;
            if (previousState.rooms.hasOwnProperty(roomId)) {
                const newRoom = roomReducer(context)(previousState.rooms[roomId], action);
                return deepMerge(previousState, { rooms: { [roomId]: newRoom } });
            }
    }

    return previousState;
}

export default rootReducer;
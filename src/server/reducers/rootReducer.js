import { actionTypes } from '../../actions/actions.js';
import create from './create.js';
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



export const rootReducer = context => (previousState, action) => {
    switch (action.type) {
        case actionTypes.CREATE:
            return create(context)(previousState, action);
        case actionTypes.ADD_QUESTION:
        case actionTypes.SHOW_QUESTION:
            const { roomId } = action;
            /*
            if (!previousState.rooms || !previousState.rooms[roomId]) {
                throw new ApiError(404, `room ${roomId} not found`);
            }
            const { passcode } = previousState.rooms
            Use middleware for this
            */
           const newRoom = roomReducer(context)(previousState.rooms[roomId]);
           return deepMerge(previousState, { rooms: { [roomId]: newRoom } });
        default:
            return previousState;
    }
}
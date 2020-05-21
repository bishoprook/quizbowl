import reducer from './roomReducer.js';
import * as actions from '../../actions/actions.js';

test('add player to empty room', () => {
    expect(reducer(undefined, actions.addPlayer('celestine'))).toStrictEqual({
        players: ['celestine'],
        buzzed: null,
        scores: { celestine: 0 },
        questions: [],
        showing: null
    });
});

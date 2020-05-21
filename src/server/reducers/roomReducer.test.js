import reducer from './roomReducer.js';
import * as actions from '../../actions/actions.js';

test('add player to empty room', () => {
    expect(reducer({ id: 'BAZZ' }, actions.addPlayer('BAZZ', 'celestine'))).toStrictEqual({
        id: 'BAZZ',
        players: ['celestine'],
        buzzed: null,
        scores: { celestine: 0 },
        questions: [],
        showing: null
    });
});

test('add player with wrong ID is no-op', () => {
    expect(reducer({ id: 'BAZZ' }, actions.addPlayer('FLIM', 'celestine'))).toStrictEqual({ id: 'BAZZ' });
});

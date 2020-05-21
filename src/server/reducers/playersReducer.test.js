import reducer from './playersReducer.js';
import { addPlayer } from '../../actions/actions.js';

test('adds new player to empty room', () => {
    expect(reducer([], addPlayer(null, 'dan'))).toStrictEqual(['dan']);
});

test('adds new player to end of existing room', () => {
    expect(reducer(['katie'], addPlayer(null, 'dan'))).toStrictEqual(['katie', 'dan']);
});

test('does not add already existing player', () => {
    expect(reducer(['katie', 'dan'], addPlayer(null, 'katie'))).toStrictEqual(['katie', 'dan']);
});
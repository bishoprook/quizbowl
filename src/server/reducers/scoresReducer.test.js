import reducer from './scoresReducer.js';
import { addPlayer, addPoints, removePoints, setScore } from '../../actions/actions.js';

test('tracks newly added players', () => {
    expect(reducer({}, addPlayer('dan'))).toStrictEqual({ dan: 0 });
});

test('does not overwrite score for re-added player', () => {
    expect(reducer({ dan: 10 }, addPlayer('dan'))).toStrictEqual({ dan: 10 });
});

test('adds 1 point to player by default', () => {
    expect(reducer({ dan: 3, wes: 5 }, addPoints('wes'))).toStrictEqual({ dan: 3, wes: 6 });
});

test('adds 5 points to player', () => {
    expect(reducer({ dan: 3, wes: 5 }, addPoints('wes', 5))).toStrictEqual({ dan: 3, wes: 10 });
});

test('does not add points for nonexistent player', () => {
    expect(reducer({ dan: 3, wes: 5 }, addPoints('thandor', 10))).toStrictEqual({ dan: 3, wes: 5 });
});

test('removes 1 point by default', () => {
    expect(reducer({ dan: 3, wes: 5 }, removePoints('wes'))).toStrictEqual({ dan: 3, wes: 4 });
});

test('removes 5 points from player', () => {
    expect(reducer({ dan: 3, wes: 10 }, removePoints('wes', 5))).toStrictEqual({ dan: 3, wes: 5 });
});

test('does not remove points for nonexistent player', () => {
    expect(reducer({ dan: 3, wes: 5 }, removePoints('thandor', 10))).toStrictEqual({ dan: 3, wes: 5 });
});

test('sets player score', () => {
    expect(reducer({ dan: 3, wes: 5 }, setScore('dan', 7))).toStrictEqual({ dan: 7, wes: 5 });
});

test('does not set score for nonexistent player', () => {
    expect(reducer({ dan: 3, wes: 5 }, setScore('thandor', 3))).toStrictEqual({ dan: 3, wes: 5 });
});
import reducer from './buzzedReducer.js';
import { buzz, clearBuzzer } from '../../actions/actions.js';

test('can buzz in from normal state', () => {
    expect(reducer(null, buzz(null, 'dan'), ['dan', 'wes'])).toStrictEqual('dan');
});

test('cannot buzz if already buzzed', () => {
    expect(reducer('dan', buzz(null, 'wes'), ['dan', 'wes'])).toStrictEqual('dan');
});

test('cannot buzz if not in players', () => {
    expect(reducer(null, buzz(null, 'celestine'), ['dan', 'wes'])).toStrictEqual(null);
})

test('can clear buzzer', () => {
    expect(reducer('dan', clearBuzzer(null), ['dan', 'wes'])).toStrictEqual(null);
});
import showQuestionReducer from './showQuestionReducer.js';
import { showQuestion } from '../../actions/actions.js';

const sut = showQuestionReducer(null);

test('sets showing based on input', () => {
    const input = { questionIds: ['a', 'b', 'c'], showing: 1 };
    const expected = { questionIds: ['a', 'b', 'c'], showing: 2 };
    const action = showQuestion('roomId', 2);

    expect(sut(input, action)).toStrictEqual(expected);
});

test('does not set showing above bounds', () => {
    const input = { questionIds: ['a', 'b', 'c'], showing: 1 };
    const action = showQuestion('roomId', 5);

    expect(sut(input, action)).toStrictEqual(input);
});

test('does not set showing below bounds', () => {
    const input = { questionIds: ['a', 'b', 'c'], showing: 1 };
    const action = showQuestion('roomId', -1);

    expect(sut(input, action)).toStrictEqual(input);
});
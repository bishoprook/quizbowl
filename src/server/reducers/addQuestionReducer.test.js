import addQuestionReducer from './addQuestionReducer.js';
import { addQuestion } from '../../actions/actions.js';

const mockContext = id => ({ idGenerator: () => id });

test('adds to an initial empty state', () => {
    const initialState = {};

    const context = mockContext('id1');
    const action = addQuestion('roomId', 'questionText');

    const expected = {
        questionIds: ['id1'],
        questions: { id1: { id: 'id1', text: 'questionText'} }
    };

    expect(addQuestionReducer(context)(initialState, action)).toStrictEqual(expected);
});

test('combines with an existing state without collision', () => {
    const initialState = {
        questionIds: ['id1'],
        questions: { id1: { id: 'id1', text: 'question1' } }
    };

    const context = mockContext('id2');
    const action = addQuestion('roomId', 'question2');

    const expected = {
        questionIds: ['id1', 'id2'],
        questions: {
            id1: { id: 'id1', text: 'question1' },
            id2: { id: 'id2', text: 'question2' }
        }
    };

    expect(addQuestionReducer(context)(initialState, action)).toStrictEqual(expected);
});
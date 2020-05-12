import createReducer from './createReducer.js';
import { create } from '../../actions/actions.js';

const mockContext = id => ({
    idGenerator: () => id
});

test('adds to an empty initial state', () => {
    const initialState = {};

    const context = mockContext('id1');
    const action = create('passcode', ['alice', 'bob']);

    const expected = {
        roomIds: ['id1'],
        rooms: {
            id1: {
                id: 'id1',
                passcode: 'passcode',
                playerIds: ['alice', 'bob'],
                scores: { alice: 0, bob: 0 },
                questionIds: [],
                questions: {},
                showing: null,
                buzzed: null
            }
        }
    };

    expect(createReducer(context)(initialState, action)).toStrictEqual(expected);
});

test('combines with an existing state without collision', () => {
    const initialState = {
        roomIds: ['id1'],
        rooms: {
            id1: {
                id: 'id1',
                passcode: 'passcode',
                playerIds: ['alice', 'bob'],
                scores: { alice: 0, bob: 0 },
                questionIds: [],
                questions: {},
                showing: null,
                buzzed: null
            }
        }
    };

    const context = mockContext('id2');
    const action = create('codepass', ['cathy', 'eve']);

    const expected = {
        roomIds: ['id1', 'id2'],
        rooms: {
            id1: {
                id: 'id1',
                passcode: 'passcode',
                playerIds: ['alice', 'bob'],
                scores: { alice: 0, bob: 0 },
                questionIds: [],
                questions: {},
                showing: null,
                buzzed: null
            },
            id2: {
                id: 'id2',
                passcode: 'codepass',
                playerIds: ['cathy', 'eve'],
                scores: { cathy: 0, eve: 0 },
                questionIds: [],
                questions: {},
                showing: null,
                buzzed: null
            }
        }
    }

    expect(createReducer(context)(initialState, action)).toStrictEqual(expected);
});
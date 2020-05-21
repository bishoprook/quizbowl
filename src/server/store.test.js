import store from './store.js';
import { create, addQuestion, showQuestion } from '../actions/actions.js';

const mockContext = idPrefix => {
    let seq = 1;
    return { idGenerator: () => `${idPrefix}${seq++}` };
};

test('starts with empty state', () => {
    const sut = store(mockContext);
    expect(sut.getState()).toStrictEqual({});
});

test('action sequence', () => {
    const sut = store(mockContext('id'));

    const actions = [
        create('pass1', ['katie', 'dan']),  // id1
        create('pass2', ['wes', 'celestine']),  // id2
        addQuestion('id1', 'what rolls down stairs?'), // id3
        addQuestion('id2', 'alone or in pairs?'), // id4
        addQuestion('id1', 'rolls over your neighbors dog?'), //id5
        showQuestion('id1', 1)
    ];

    actions.forEach(a => sut.dispatch(a));

    const expected = {
        roomIds: ['id1', 'id2'],
        rooms: {
            id1: {
                id: 'id1',
                passcode: 'pass1',
                playerIds: ['katie', 'dan'],
                scores: { katie: 0, dan: 0 },
                questionIds: ['id3', 'id5'],
                questions: {
                    id3: { id: 'id3', text: 'what rolls down stairs?' },
                    id5: { id: 'id5', text: 'rolls over your neighbors dog?' }
                },
                showing: 1,
                buzzed: null
            },
            id2: {
                id: 'id2',
                passcode: 'pass2',
                playerIds: ['wes', 'celestine'],
                scores: { wes: 0, celestine: 0 },
                questionIds: ['id4'],
                questions: {
                    id4: { id: 'id4', text: 'alone or in pairs?' }
                },
                showing: null,
                buzzed: null
            }
        }
    };

    expect(sut.getState()).toStrictEqual(expected);
});
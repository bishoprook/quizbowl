import { createStore } from 'redux';
import roomReducer from './reducers/roomReducer.js';

import { addQuestion, showQuestion, addPlayer, buzz, addPoints } from '../actions/actions.js';

test('starts with empty state', () => {
    const store = createStore(roomReducer);
    expect(store.getState()).toStrictEqual({ players: [], buzzed: null, scores: {}, questions: [], showing: null });
});

test('action sequence', () => {
    const store = createStore(roomReducer);

    const actions = [
        addQuestion('what rolls down stairs'),
        showQuestion(1),
        addQuestion('rolls over your neighbors dog'),
        addPlayer('katie'),
        addQuestion('alone or in pairs', 1),
        showQuestion(2),
        addPlayer('dan'),
        buzz('katie'),
        buzz('dan'),
        addPoints('dan', 3)
    ];

    actions.forEach(a => store.dispatch(a));

    const expected = {
        players: ['katie', 'dan'],
        buzzed: 'katie',
        scores: { katie: 0, dan: 3 },
        questions: [
            { text: 'what rolls down stairs' },
            { text: 'alone or in pairs' },
            { text: 'rolls over your neighbors dog' }
        ],
        showing: 2
    };

    expect(store.getState()).toStrictEqual(expected);
});
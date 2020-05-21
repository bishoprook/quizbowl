import { createStore } from 'redux';
import lobbyReducer from './reducers/lobbyReducer.js';

import * as actions from '../actions/actions.js';

test('starts with empty state', () => {
    const store = createStore(lobbyReducer);
    expect(store.getState()).toStrictEqual({});
});

test('action sequence', () => {
    const store = createStore(lobbyReducer);

    [
        actions.create('BOBA'),
        actions.addQuestion('BOBA', 'what rolls down stairs'),
        actions.showQuestion('BOBA', 1),
        actions.addQuestion('BOBA', 'rolls over your neighbors dog'),
        actions.addPlayer('BOBA', 'katie'),
        actions.addQuestion('BOBA', 'alone or in pairs', 1),
        actions.showQuestion('BOBA', 2),
        actions.addPlayer('BOBA', 'dan'),
        actions.buzz('BOBA', 'katie'),
        actions.buzz('BOBA', 'dan'),
        actions.addPoints('BOBA', 'dan', 3)
    ].forEach(a => store.dispatch(a));

    const expected = {
        BOBA: {
            id: 'BOBA',
            players: ['katie', 'dan'],
            buzzed: 'katie',
            scores: { katie: 0, dan: 3 },
            questions: [
                { text: 'what rolls down stairs' },
                { text: 'alone or in pairs' },
                { text: 'rolls over your neighbors dog' }
            ],
            showing: 2
        }
    };

    expect(store.getState()).toStrictEqual(expected);
});
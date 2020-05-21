import playersReducer from './playersReducer.js';
import buzzedReducer from './buzzedReducer.js';
import scoresReducer from './scoresReducer.js';
import questionsReducer from './questionsReducer.js';
import showingReducer from './showingReducer.js';

const emptyRoom = {
    players: [],
    buzzed: null,
    scores: {},
    questions: [],
    showing: null
};

const roomReducer = (state = emptyRoom, action) => ({
    players: playersReducer(state.players, action),
    buzzed: buzzedReducer(state.buzzed, action, state.players),
    scores: scoresReducer(state.scores, action),
    questions: questionsReducer(state.questions, action),
    showing: showingReducer(state.showing, action, state.questions)
});

export default roomReducer;
import playersReducer from './playersReducer.js';
import buzzedReducer from './buzzedReducer.js';
import scoresReducer from './scoresReducer.js';
import questionsReducer from './questionsReducer.js';
import showingReducer from './showingReducer.js';

const roomReducer = (state, action) => ({
    id: state.id,
    players: playersReducer(state.players, action),
    buzzed: buzzedReducer(state.buzzed, action, state.players),
    scores: scoresReducer(state.scores, action),
    questions: questionsReducer(state.questions, action),
    showing: showingReducer(state.showing, action, state.questions)
});

export default roomReducer;
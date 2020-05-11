export default (state = 'nobody', action) => {
    switch (action.type) {
        case 'BUZZ':
            return state === 'nobody' ? action.actor : state;
        case 'CLEAR':
            return 'nobody';
        default:
            return state;
    }
};

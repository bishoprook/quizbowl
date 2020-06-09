import React from 'react';

const RoomContext = React.createContext({
    loading: true,
    room: '',
    roomState: {},
    sendAction: () => {}
});

export default RoomContext;
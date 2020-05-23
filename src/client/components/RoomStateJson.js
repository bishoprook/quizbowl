import React from 'react';
import RoomContext from './RoomContext.js';

const RoomStateJson = () => (
    <RoomContext.Consumer>
        {({ loading, roomState }) => loading ?
            <span>Loading...</span> :
            <span>Room state {JSON.stringify(roomState)}</span>}
    </RoomContext.Consumer>
)

export default RoomStateJson;

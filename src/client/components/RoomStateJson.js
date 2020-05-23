import React from 'react';
import RoomContext from './RoomContext.js';

const RoomStateJson = () => (
    <RoomContext.Consumer>
        {({ roomState }) => (
            <pre>{JSON.stringify(roomState, null, 2)}</pre>
        )}
    </RoomContext.Consumer>
)

export default RoomStateJson;

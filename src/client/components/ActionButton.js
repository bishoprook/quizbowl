import React from 'react';
import RoomContext from './RoomContext.js';

const ActionButton = ({ action = () => ({}), disabled = () => false, children = [] }) => (
    <RoomContext.Consumer>
        {({ room, sendAction }) => (
            <button disabled={disabled()}
            onClick={() => {
                sendAction(action(room));
            }}>{children}</button>
        )}
    </RoomContext.Consumer>
)

export default ActionButton;
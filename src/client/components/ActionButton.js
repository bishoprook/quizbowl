import React from 'react';
import RoomContext from './RoomContext.js';

import Button from 'react-bootstrap/Button';


const ActionButton = ({
    action = () => ({}),
    disabled = () => false,
    children = [],
    ...props
 }) => (
    <RoomContext.Consumer>
        {({ room, sendAction }) => (
            <Button
            disabled={disabled()}
            onClick={() => sendAction(action(room))}
            {...props}
            >
                {children}
            </Button>
        )}
    </RoomContext.Consumer>
)

export default ActionButton;
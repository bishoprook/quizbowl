import React from 'react';
import { buzz } from '../actions/actions.js';
import RoomContext from './RoomContext.js';
import ActionButton from './ActionButton.js';

const Buzzer = ({ name, children, ...props }) => (
    <RoomContext.Consumer>
        {({ room, roomState: { buzzed }}) => (
            <ActionButton
            action={() => buzz(room, name)}
            disabled={() => buzzed != null}
            {...props}
            >
                {children}
            </ActionButton>
        )}
    </RoomContext.Consumer>
)

export default Buzzer;
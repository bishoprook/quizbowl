import React from 'react';
import { buzz } from '../../actions/actions.js';
import RoomContext from './RoomContext.js';
import ActionButton from './ActionButton.js';

const Buzzer = ({ name, children }) => (
    <RoomContext.Consumer>
        {({ room, roomState: { buzzed }}) => (
            <ActionButton
            action={() => {
                return buzz(room, name);
            }}
            disabled={() => {
                return buzzed != null;
            }}>{children}</ActionButton>
        )}
    </RoomContext.Consumer>
)

export default Buzzer;
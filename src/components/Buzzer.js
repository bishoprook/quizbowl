import React from 'react';
import { buzz } from '../actions/actions.js';
import RoomContext from './RoomContext.js';
import ActionButton from './ActionButton.js';

const Buzzer = ({ name, children, ...props }) => (
    <RoomContext.Consumer>
        {({ room, roomState: { players, buzzed }}) => (
            <ActionButton
            action={() => buzz(room, name)}
            disabled={() => locked(players[name], buzzed)}
            {...props}
            >
                {children}
            </ActionButton>
        )}
    </RoomContext.Consumer>
)

const locked = (teamName, buzzed) => (
    buzzed.filter(([buzzedTeam, _]) => buzzedTeam === teamName).length !== 0
);

export default Buzzer;

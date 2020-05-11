import React from 'react';
import Buzzer from '../containers/Buzzer';
import TurnDisplay from '../containers/TurnDisplay';

const Player = ({ match: { params: { name } } }) => {
    return (
        <div>
            <TurnDisplay />
            <div>
                <Buzzer actor={name} />
            </div>
        </div>
    );
};

export default Player;
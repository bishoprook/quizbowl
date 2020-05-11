import React from 'react';
import Clear from '../containers/Clear';
import Buzzer from '../containers/Buzzer';
import TurnDisplay from '../containers/TurnDisplay';

const Admin = () => {
    return (
        <div>
            <TurnDisplay />
            <div>
                <Buzzer actor="dan" />
                <Buzzer actor="bethany" />
                <Buzzer actor="celestine" />
            </div>
            <Clear />
        </div>
    );
};

export default Admin;
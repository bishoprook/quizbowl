import React from 'react';

import { clearBuzzer } from '../../actions/actions.js';

import RoomStateJson from './RoomStateJson.js';
import PlayerTable from './PlayerTable.js';
import ActionButton from './ActionButton.js';

const Admin = () => {
    const passcodeInput = React.useRef(null);
    return (
        <div>
            <h1>Admin</h1>
            <div><input type="text" ref={passcodeInput} defaultValue="pass"></input></div>
            <RoomStateJson />
            <PlayerTable />
            <ActionButton action={room => clearBuzzer(room, passcodeInput.current.value)}>Clear buzzer</ActionButton>
        </div>
    );
};

export default Admin;

import React, { useState } from 'react';
import Buzzer from './Buzzer.js';
import Signup from './Signup.js';
import RoomStateJson from './RoomStateJson.js';

const Player = () => {
    const [name, setName] = useState(null);

    return (
        <div>
            <h1>Player {name || 'Unknown'}</h1>
            <RoomStateJson />
            {name == null ? <Signup setName={setName} /> : <Buzzer name={name}>Buzz</Buzzer>}
        </div>
    );
}

export default Player;

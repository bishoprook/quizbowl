import React from 'react';

import RoomContext from './RoomContext.js';
import Buzzer from './Buzzer.js';

const PlayerTable = () => (
    <RoomContext.Consumer>
        {({ roomState: { players = [], scores = {} } }) => (
            <table>
                <tbody>
                    <tr>
                        <th>Player name</th>
                        <th>Score</th>
                        <th></th>
                    </tr>
                    {players.map(player => (
                        <tr key={`player-row-${player}`}>
                            <td>{player}</td>
                            <td>{scores[player]}</td>
                            <td><Buzzer name={player}>Buzz {player}</Buzzer></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </RoomContext.Consumer>
)

export default PlayerTable;
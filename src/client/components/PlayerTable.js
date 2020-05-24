import React from 'react';

import { addPoints, removePoints, clearBuzzer, removePlayer } from '../../actions/actions.js';

import RoomContext from './RoomContext.js';
import Buzzer from './Buzzer.js';
import Table from 'react-bootstrap/Table';
import ActionButton from './ActionButton.js';

import ButtonGroup from 'react-bootstrap/ButtonGroup';

const clear = (getPasscode) =>
    <ActionButton
        size="sm"
        action={room => clearBuzzer(room, getPasscode())}
    >
        {'Clear buzzer'}
    </ActionButton>;

const increment = (getPasscode, player) =>
    <ActionButton
        size="sm"
        action={room => addPoints(room, getPasscode(), player)}
    >
        {'+'}
    </ActionButton>;

const decrement = (getPasscode, player) =>
    <ActionButton
        size="sm"
        action={room => removePoints(room, getPasscode(), player)}
    >
        {'−'}
    </ActionButton>;

const remove = (getPasscode, player) =>
    <ActionButton
        size="sm"
        variant="danger"
        action={room => removePlayer(room, getPasscode(), player)}
    >
        {'Remove'}
    </ActionButton>;

const PlayerTable = ({ getPasscode }) => (
    <RoomContext.Consumer>
        {({ roomState: { players = [], scores = {} } }) => (
            <Table size="sm" striped bordered hover>
                <tbody>
                    <tr>
                        <th>Player name</th>
                        <th>Score</th>
                        <th>{clear(getPasscode)}</th>
                    </tr>
                    {players.map(player => (
                        <tr key={`player-row-${player}`}>
                            <td>{player}</td>
                            <td>
                                <span>{scores[player]}</span>
                                <ButtonGroup className="ml-2">
                                    {increment(getPasscode, player)}
                                    {decrement(getPasscode, player)}
                                </ButtonGroup>
                            </td>
                            <td><Buzzer size="sm" variant="link" name={player}>Buzz {player}</Buzzer></td>
                            <td>{remove(getPasscode, player)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )}
    </RoomContext.Consumer>
)

export default PlayerTable;
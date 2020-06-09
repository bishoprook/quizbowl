import React from 'react';
import RoomContext from './RoomContext.js';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import Buzzer from './Buzzer.js';

const playerCard = (player, score, isBuzzed, showBuzz) => {
    return (
        <Card
            key={`player-card-${player}`}
            bg={isBuzzed ? 'success' : 'light'}
            text={isBuzzed ? 'light' : 'dark'}
            className="text-center"
        >
            <Card.Body>
                <Card.Title>{player}</Card.Title>
                <Card.Text className="display-1">{score}</Card.Text>
                {showBuzz ? <Buzzer className="p-4" size="lg" block name={player}>Buzz</Buzzer> : null}
            </Card.Body>
        </Card>
    );
}

const Scoreboard = ({ owner }) => (
    <RoomContext.Consumer>
        {({ roomState: { players, scores, buzzed } }) => (
            <CardDeck>
                {players.map(player => playerCard(player, scores[player], buzzed === player, owner === player))}
            </CardDeck>
        )}
    </RoomContext.Consumer>
)

export default Scoreboard;

import React from 'react';
import RoomContext from './RoomContext.js';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const playerCard = (player, score, isBuzzed) => {
    return (
        <Card
            key={`player-card-${player}`}
            bg={isBuzzed ? 'success' : 'light'}
            text={isBuzzed ? 'light' : 'dark'}
            className="text-center"
        >
            <Card.Body>
                <Card.Title>{player}</Card.Title>
                <Card.Text><h1 class="display-1">{score}</h1></Card.Text>
            </Card.Body>
        </Card>
    );
}

const Scoreboard = () => (
    <RoomContext.Consumer>
        {({ roomState: { players, scores, buzzed } }) => (
            <CardDeck>
                {players.map(player => playerCard(player, scores[player], buzzed === player))}
            </CardDeck>
        )}
    </RoomContext.Consumer>
)

export default Scoreboard;

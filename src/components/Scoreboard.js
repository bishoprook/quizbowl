import React from 'react';
import RoomContext from './RoomContext.js';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import Buzzer from './Buzzer.js';

const TeamCard = ({ teamName, score, isBuzzed, children }) => {
    return (
        <Card
            key={`team-card-${teamName}`}
            bg={isBuzzed ? 'success' : 'light'}
            text={isBuzzed ? 'light' : 'dark'}
            className="text-center"
        >
            <Card.Body>
                <Card.Title>{teamName}</Card.Title>
                <Card.Text className="display-1">{score}</Card.Text>
                {children}
            </Card.Body>
        </Card>
    );
}

const Scoreboard = ({ owner }) => (
    <RoomContext.Consumer>
        {({ roomState: { teams, scores, buzzed } }) => {
            const buzzedTeam = buzzed && buzzed[0] && buzzed[0][0];

            return <CardDeck>
                {Object.keys(teams).map(teamName => {
                    const buzzerButton = teams[owner] === teamName ?
                        <Buzzer className="p-4" size="lg" block name={owner}>Buzz</Buzzer> :
                        null;
                    return <TeamCard teamName={teamName} score={scores[teamName]} isBuzzed={buzzedTeam === teamName}>
                            {buzzerButton}
                        </TeamCard>
                })}
            </CardDeck>
        }}
    </RoomContext.Consumer>
)

export default Scoreboard;

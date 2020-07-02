import React from 'react';
import RoomContext from './RoomContext.js';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import Buzzer from './Buzzer.js';

const TeamCard = ({ teamName, score, buzzedOrder, children }) => {
    return (
        <Card
            key={`team-card-${teamName}`}
            bg={buzzedOrder === 0 ? 'success' : 'light'}
            text={buzzedOrder === 0 ? 'light' : 'dark'}
            className="text-center"
        >
            <Card.Body>
                <Card.Title>{teamName}</Card.Title>
                <Card.Text className="display-1">{score}</Card.Text>
                {children}
                <Card.Text className="display-4 text-right">
                    {
                        buzzedOrder >= 0 ?
                            <span className="badge badge-pill badge-info">{buzzedOrder + 1}</span> :
                            <span className="badge badge-pill">&nbsp;</span>
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

const Scoreboard = ({ owner }) => (
    <RoomContext.Consumer>
        {({ roomState: { teams, players, scores, buzzed = [] } }) => {
            return <CardDeck>
                {Object.keys(teams).map(teamName => {
                    const buzzerButton = players[owner] === teamName ?
                        <Buzzer className="p-4" size="lg" block name={owner}>Buzz</Buzzer> :
                        null;
                    return <TeamCard
                        key={`${teamName}-card`}
                        teamName={teamName}
                        score={scores[teamName]}
                        buzzedOrder={buzzed.findIndex(([buzzedTeam, _]) => teamName === buzzedTeam)}>
                            {buzzerButton}
                        </TeamCard>
                })}
            </CardDeck>
        }}
    </RoomContext.Consumer>
)

export default Scoreboard;

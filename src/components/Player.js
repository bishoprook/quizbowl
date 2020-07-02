import React from 'react';
import Signup from './Signup.js';
import Scoreboard from './Scoreboard.js';
import QuestionDisplay from './QuestionDisplay.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IdentityProvider from './IdentityProvider.js';
import IdentityContext from './IdentityContext.js';
import RoomContext from './RoomContext.js';

const Player = () => (
    <RoomContext.Consumer>
        {({ room }) => (
            <IdentityProvider room={room}>
                <IdentityContext.Consumer>
                    {({ loggedIn, name, saveIdentity }) => {
                        return !loggedIn ?
                        <Signup onSave={saveIdentity} /> :
                        <Container>
                            <Row>
                                <Col>
                                    <Scoreboard owner={name} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <QuestionDisplay />
                                </Col>
                            </Row>
                        </Container>
                    }}
                </IdentityContext.Consumer>
            </IdentityProvider>
        )}
    </RoomContext.Consumer>
);

export default Player;

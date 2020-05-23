import React, { useState } from 'react';
import Buzzer from './Buzzer.js';
import Signup from './Signup.js';
import Scoreboard from './Scoreboard.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Player = () => {
    const [name, setName] = useState(null);

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Player {name || 'Unknown'}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Scoreboard />
                </Col>
            </Row>
            <Row>
                <Col>
                    {name == null ?
                        <Signup setName={setName} /> :
                        <Buzzer size="lg" variant="primary" block name={name}>Buzz</Buzzer>}
                </Col>
            </Row>
        </Container>
    );
}

export default Player;

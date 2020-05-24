import React, { useState } from 'react';
import Signup from './Signup.js';
import Scoreboard from './Scoreboard.js';
import QuestionDisplay from './QuestionDisplay.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Player = () => {
    const [name, setName] = useState(null);

    return (
        name == null ? <Signup setName={setName}/> : (
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
        )
    );
}

export default Player;

import React from 'react';
import Scoreboard from './Scoreboard.js';
import QuestionDisplay from './QuestionDisplay.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Spectator = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Scoreboard />
                </Col>
            </Row>
            <Row>
                <Col>
                    <QuestionDisplay />
                </Col>
            </Row>
        </Container>
    );
};

export default Spectator;

import React from 'react';

import RoomStateJson from './RoomStateJson.js';
import PlayerTable from './PlayerTable.js';
import Scoreboard from './Scoreboard.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Admin = () => {
    const passcodeInput = React.useRef(null);
    const getPasscode = () => passcodeInput.current.value;
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Admin</h1>
                </Col>
            </Row>
            <Row>
                <Col md="auto">
                    <Form.Label>Passcode</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="text" ref={passcodeInput} defaultValue="pass" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Scoreboard />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PlayerTable getPasscode={getPasscode} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <RoomStateJson />
                </Col>
            </Row>
        </Container>
    );
};

export default Admin;

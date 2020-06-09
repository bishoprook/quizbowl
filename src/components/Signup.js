import React, { useEffect, useRef } from 'react';
import { addPlayer } from '../actions/actions.js';
import RoomContext from './RoomContext.js';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Signup = ({ setName }) => {
    const nameInput = useRef(null);
    useEffect(() => nameInput.current.focus(), []);

    return (
        <RoomContext.Consumer>
        {({ sendAction, room }) => {
            const onSubmit = (evt) => {
                evt.preventDefault();
                const name = nameInput.current.value;
                sendAction(addPlayer(room, name));
                setName(name);
            }
            return (
                <Row className="h-100">
                    <Col className="align-self-center">
                        <Card className="w-75 mx-auto" bg="light" text="dark">
                            <Card.Body>
                                <Card.Title>Player sign-in</Card.Title>
                                <Form onSubmit={onSubmit}>
                                    <Form.Group controlId="signup">
                                        <Form.Label>Player name</Form.Label>
                                        <Form.Control ref={nameInput} type="text" placeholder="Enter name" />
                                        <Button block variant="primary" type="submit">Start Playing</Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            );
        }}
        </RoomContext.Consumer>
    );
}

export default Signup;
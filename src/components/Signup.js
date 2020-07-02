import React, { useEffect, useRef, useState } from 'react';
import { addPlayer } from '../actions/actions.js';
import RoomContext from './RoomContext.js';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Signup = ({ onSave }) => {
    const nameInput = useRef(null);
    const teamSelect = useRef(null);
    const teamInput = useRef(null);
    useEffect(() => nameInput.current.focus(), []);

    const [showTeamNameInput, setShowTeamNameInput] = useState(false);

    return (
        <RoomContext.Consumer>
        {({ sendAction, room, roomState: { teams } }) => {
            const onSubmit = (evt) => {

                //TODO: Clean this way up

                evt.preventDefault();
                const teamSelectionId = teamSelect.current.selectedOptions[0].id;

                if (teamSelectionId === 'nullTeam') {
                    teamSelect.current.isValid = false;
                    return;
                }

                const name = nameInput.current.value;

                if (name === '') {
                    nameInput.current.isValid = false;
                    return;
                }

                const teamName = teamSelectionId === 'newTeam' ? teamInput.current.value : teamSelect.current.value;

                if (teamSelectionId === 'newTeam' && teamName === '') {
                    teamInput.current.isValid = false;
                    return;
                }

                sendAction(addPlayer(room, name, teamName));
                onSave(name, teamName);
            }
            const onTeamSelectChanged = (evt) => {
                setShowTeamNameInput(teamSelect.current.selectedOptions[0].id === 'newTeam');
            }
            return (
                <Row className="h-100">
                    <Col className="align-self-center">
                        <Card className="w-75 mx-auto" bg="light" text="dark">
                            <Card.Body>
                                <Card.Title>Player sign-in</Card.Title>
                                <Form onSubmit={onSubmit}>
                                    <Form.Group controlId="signup">
                                        <Form.Label>Team name</Form.Label>
                                        <Form.Control ref={teamSelect} as="select" onChange={onTeamSelectChanged}>
                                            <option id="nullTeam">Select team...</option>
                                            {
                                                Object.keys(teams).map(teamName =>
                                                    <option key={`opt-${teamName}`}>{teamName}</option>
                                                )
                                            }
                                            <option id="newTeam">New team...</option>
                                        </Form.Control>
                                        {
                                            showTeamNameInput ? <>
                                                <Form.Label>New Team name</Form.Label>
                                                <Form.Control ref={teamInput} type="text" placeholder="Enter team name" />
                                            </> : null
                                        }
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

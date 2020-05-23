import React, { useEffect, useRef } from 'react';
import { addPlayer } from '../../actions/actions.js';
import RoomContext from './RoomContext.js';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
                <Form onSubmit={onSubmit}>
                    <Form.Group controlId="signup">
                        <Form.Label>Player name</Form.Label>
                        <Form.Control ref={nameInput} type="text" placeholder="Enter name" />
                        <Button block variant="primary" type="submit">Start Playing</Button>
                    </Form.Group>
                </Form>
            );
        }}
        </RoomContext.Consumer>
    );
}

export default Signup;
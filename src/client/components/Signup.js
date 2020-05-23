import React from 'react';
import { addPlayer } from '../../actions/actions.js';
import RoomContext from './RoomContext.js';

const Signup = ({ setName }) => {
    const nameInput = React.useRef(null);
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
                <form onSubmit={onSubmit}>
                    <input ref={nameInput} type="text" placeholder="Player name"></input>
                    <input type="submit"></input>
                </form>
            );
        }}
        </RoomContext.Consumer>
    );
}

export default Signup;
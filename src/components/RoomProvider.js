import React, { useState, useEffect } from 'react';
import RoomContext from './RoomContext.js';
import sprite from '../sound/sprite.mp3';
import useSound from 'use-sound';
import { actionTypes } from '../actions/actions.js';

const playSoundForAction = (action, play) => {
    switch (action.type) {
        case actionTypes.BUZZ:
            play({ id: 'buzzin' });
            break;
        case actionTypes.ADD_POINTS:
            play({ id: 'correct' });
            break;
        default:
            break;
    }
}
const useSocket = room => {
    const [state, setState] = useState({ room, loading: true });
    const [play] = useSound(sprite, {
        sprite: {
            buzzin: [0, 1500],
            correct: [1500, 1500]
        }
    });

    useEffect(() => {
        const socket = new WebSocket(`wss://quizbowl-api.uc.r.appspot.com/${room}`);

        socket.onmessage = ({ data }) => {
            setState({
                room,
                loading: false,
                sendAction: action => {
                    playSoundForAction(action, play);
                    socket.send(JSON.stringify(action));
                },
                roomState: JSON.parse(data)
            });
        };

        return closeSocket(socket);
    }, [room, play]);

    return [state];
}

const closeSocket = socket => () => {
    socket.onmessage = null;
    switch(socket.readyState) {
        case WebSocket.CONNECTING:
            socket.onopen = () => socket.close();
            break;
        case WebSocket.OPEN:
            socket.close();
            break;
        default:
            break;
    }
}

const RoomProvider = ({ room, children }) => {
    const [state] = useSocket(room);

    return state.loading ?
        <span>Loading...</span> :
        <RoomContext.Provider value={state}>
            {children}
        </RoomContext.Provider>;
}

export default RoomProvider;

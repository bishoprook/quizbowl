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
        const socket = new WebSocket(`wss://quizbowl-api.rook.codes/${room}`);

        let isAlive = true;
        socket.onmessage = ({ data }) => {
            if (data === '__pong__') {
                isAlive = true;
                return;
            }

            const roomState = JSON.parse(data);
            playSoundForAction(roomState.lastAction, play);
            setState({
                room,
                roomState,
                loading: false,
                sendAction: action => socket.send(JSON.stringify(action))
            });
        };

        const heartbeat = setInterval(() => {
            if (isAlive === false) {
                console.log('Server is dead??');
            }
            isAlive = false;
            console.log('Heartbeat');
            socket.send('__ping__');
        });

        return closeSocket(socket, heartbeat);
    }, [room, play]);

    return [state];
}

const closeSocket = (socket, heartbeat) => () => {
    socket.onmessage = null;
    clearInterval(heartbeat);
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

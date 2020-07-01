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
            const roomState = JSON.parse(data);
            playSoundForAction(roomState.lastAction, play);
            setState({
                room,
                roomState,
                loading: false,
                sendAction: action => socket.send(JSON.stringify(action))
            });
        };

        let isAlive = true;
        const heartbeat = setInterval(() => {
            if (!isAlive) {
                console.log('Server connection is dead');
                // Force a page refresh or what??
            }
            isAlive = false;
            console.log('Heartbeat');
        }, 10000);

        return closeSocket(socket, heartbeat);
    }, [room, play]);

    return [state];
}

const closeSocket = (socket, heartbeat) => () => {
    clearInterval(heartbeat);
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

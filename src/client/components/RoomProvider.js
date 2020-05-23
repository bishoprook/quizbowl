import React from 'react';
import RoomContext from './RoomContext.js';

class RoomProvider extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            room: props.room,
            roomState: {}
        }
    }

    componentDidMount() {
        this.openSocket();
    }

    sendAction = action => {
        this.socket.send(JSON.stringify(action));
    }

    openSocket = () => {
        this.socket = new WebSocket(`ws://localhost:8081/${this.props.room}`);
        this.socket.onmessage = ({ data }) => this.setState({
            loading: false,
            sendAction: this.sendAction,
            roomState: JSON.parse(data)
        });
    }

    render() {
        return this.state.loading ?
            <span>Loading...</span> :
            <RoomContext.Provider value={this.state}>
                {this.props.children}
            </RoomContext.Provider>;
    }
}

export default RoomProvider;
import React from 'react';

class Spectator extends React.PureComponent {
    constructor() {
        super();
        this.state = { loading: true, room: null };
    }

    componentDidMount() {
        this.fetchFromApi();
    }

    fetchFromApi() {
        const { match: { params: { room } } } = this.props;
        fetch(`http://localhost:8080/api/state/${room}`).then((result) => {
            result.json().then(roomState => {
                this.setState({ loading: false, room: roomState });
            });
        });
    }

    render() {
        if (this.state.loading) {
            return <span>Loading</span>;
        }
        else {
            return <span>{JSON.stringify(this.state.room)}</span>;
        }
    }
}

export default Spectator;

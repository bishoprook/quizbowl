import React from 'react';

class Player extends React.PureComponent {
    constructor() {
        super()
        this.state = { name: null };

        this.setName = this.setName.bind(this);
        this.buzz = this.buzz.bind(this);
    }

    setName() {
        this.setState({ name: this.refs.nameInput.value });
    }

    buzz() {
    }

    render() {
        if (this.state.name != null) {
            return (
                <div>
                    <span>My name is {this.state.name}</span>
                    <button>Buzz</button>
                </div>
            );
        }
        else {
            return (
                <div>
                    <input ref="nameInput" type="text"></input>
                    <button onClick={this.setName}>Submit</button>
                </div>
            );
        }
    }
}

/*const Player = ({ match: { params: { name } } }) => {
    return (
        <div>
            <TurnDisplay />
            <div>
                <Buzzer actor={name} />
            </div>
        </div>
    );
};*/

export default Player;

import React from 'react';

export default class Hello extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    add() {
        let counter = this.state.counter + 1;
        this.setState({ counter })
    }

    render() {
        return (
            <div>
                <button onClick={this.add.bind(this)}>Click Me</button>
                <p>You've pressed the button {this.state.counter} times.</p>
            </div>
        );
    }
}
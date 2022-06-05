import React, { Component } from 'react';

class Letter extends Component {

    letterClicked = () => {
        if (this.props.func) this.props.func(this.props.letter)
    }

    render() {
        return (
            <span className={this.props.className} onClick={this.letterClicked}>{this.props.letter}</span>
        )
    }
}

export default Letter
import React, { Component } from 'react';


class EndGame extends Component {

    render() {
        return (
            <div className="message">{this.props.message}</div>
        )
    }
}

export default EndGame
import React, { Component } from 'react';


class Score extends Component {


    render() {
        return (
            <div>
                <div className={this.props.score >= 80 ? "high" : this.props.score < 50 ? "low" : "mid"}>{this.props.score}</div>
            </div>
        )
    }
}

export default Score
import React, { Component } from 'react';
import Letter from './Letter';


class Letters extends Component {

    setLetters(lettersStatus) {
        const lettersArr = []
        let letterIndex = 0
        for (let char of Object.keys(lettersStatus)) {
            lettersArr.push(<Letter key={"char" + letterIndex} func={this.props.func} className={this.props.lettersStatus[char] ? "crossed" : "letter"} letter={char} />)
            letterIndex++
        }
        return lettersArr;
    }

    render() {
        const lettersArr = this.setLetters(this.props.lettersStatus)
        return (
            <div>
                <div>{lettersArr}</div>
            </div>
        )
    }
}

export default Letters
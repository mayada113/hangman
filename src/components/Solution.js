import React, { Component } from 'react';
import Letter from './Letter';



class Solution extends Component {
    setWord(word) {
        const wordsLetters = []
        let letterIndex = 0
        for (let char of word) {
            wordsLetters.push(<Letter key={"ch" + letterIndex} className="letter" letter={this.props.lettersStatus[char.toUpperCase()] ? char : "_"} />)
            letterIndex++
        }
        return wordsLetters;
    }

    showHint = () => {
        this.props.func()
    }

    render() {
        const wordsLetters = this.setWord(this.props.solution.word)

        return (
            <div>
                <div className="word">{wordsLetters}</div>
                <div className={!this.props.flag ? "hideHint" : "hint"} onClick={this.showHint}>{this.props.flag ? this.props.solution.hint : "Need a hint? click here"}</div>
            </div>
        )
    }
}

export default Solution
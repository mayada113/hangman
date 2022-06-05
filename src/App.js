import React from 'react';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';
import EndGame from './components/EndGame';
import { Component } from 'react';

const INC_VALUE = 20
const DEC_VALUE = 5
const IMG_URL = "https://th.bing.com/th/id/OIP.5e5QQ2sO7YpXTnkJkuCPxQAAAA?pid=ImgDet&rs=1"
const INIT_POINTS = 100


let currWordIndex = 0    // Global Var

const gameWords = [
  { word: "Aladdin", hint: "Arabian Nights" },
  { word: "Copacabana", hint: "Her name was Lola" },
  { word: "Joey", hint: "Well, the fridge broke, so I had to eat everything." }
]

class App extends Component {

  constructor() {
    super()
    this.state = {
      lettersStatus: this.generateLetterStatuses(),
      solution: gameWords[currWordIndex % gameWords.length],
      showHint: false,
      score: INIT_POINTS,
      message: ""
    }
  }

  showHint = () => {
    this.setState({
      showHint: true
    })
  }

  checkWin() {
    for (let char of this.state.solution.word) {
      if (!this.state.lettersStatus[char.toUpperCase()]) return;
    }
    this.setState({
      message: <div><p>Congratulations!!!</p>
        <button onClick={this.restart}>Restart</button>
      </div>
    })
  }

  restart = () => {
    currWordIndex = currWordIndex + 1
    this.setState({
      lettersStatus: this.generateLetterStatuses(),
      solution: gameWords[Math.floor(Math.random() * gameWords.length)],
      showHint: false,
      score: INIT_POINTS,
      message: ""
    })
  }


  gameEndedLose = () => {
    const secretWord = this.state.solution.word
    this.setState({
      message: <div><p>You Lost :( The secret word is {secretWord}</p>
        <button onClick={this.restart}>Restart</button>
      </div>
    })
  }


  selectLetter = (letter) => {

    if (!this.state.lettersStatus[letter] && this.state.score > 0) {

      let tempLettersStatus = Object.assign({}, this.state.lettersStatus)
      tempLettersStatus[letter] = true

      this.setState({
        score: (this.state.solution.word.includes(letter.toUpperCase()) || 
                                   this.state.solution.word.includes(letter.toLowerCase()))
          ? this.state.score + DEC_VALUE : this.state.score - INC_VALUE,
        lettersStatus: tempLettersStatus
      }, function () {
        if (this.state.score <= 0) this.gameEndedLose()
        this.checkWin();
      })


    }
  }


  generateLetterStatuses() {
    let letterStatus = {}
    for (let c = 65; c < 91; c++) {
      letterStatus[String.fromCharCode(c)] = false
    }
    return letterStatus
  }


  render() {
    return (
      <div className="App">
        <Score score={this.state.score} /> <Solution flag={this.state.showHint} func={this.showHint} lettersStatus={this.state.lettersStatus} solution={this.state.solution} />
        <Letters func={this.selectLetter} lettersStatus={this.state.lettersStatus}>
        </Letters>
        <EndGame message={this.state.message} />
        <img className="img" alt="Hangman Pic" src={IMG_URL}></img>
      </div>
    );
  }
}

export default App;

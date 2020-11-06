import React, { Component } from 'react';
import '../FlashSpeech/cards.css';
import Speech from 'react-speech';

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://rapidapi.p.rapidapi.com/words/hatchback/typeOf',
  headers: {
    'x-rapidapi-key': '0fc2d0a77cmshbe792af71542bf5p134800jsn3fa7dd925eba',
    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
  },
};

let count = 0;
export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      currentWord: '',
    };
    this.renderNextCard = this.renderNextCard.bind(this);
  }

  getWordsAPI = () => {
    console.log(this.state.words);
    axios
      .request(options)
      .then((response) => {
        this.setState({
          words: response.data.typeOf,
          currentWord: response.data.typeOf[0],
        });
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  componentDidMount() {
    this.getWordsAPI();
  }

  renderNextCard = () => {
    console.log(count);
    if (count === this.state.words.length - 1) {
      count = 0;
    } else {
      count++;
    }

    if (this.state.currentWord === null) {
      count++;
    }

    this.setState({
      currentWord: this.state.words[count],
    });

    return this.state.currentWord;
  };

  render() {
    return (
      <div className="mainContainer">
        <div id="card" className="card">
          <div className="cardFront">
            {/* <button onclick="flip()" id="flipback">Flip to Back</button> */}
            <h1>{this.state.currentWord}</h1>
            {/* <p>This side can hold the word from the array.</p> */}
            <center>
              <Speech text={this.state.currentWord} />
            </center>
            <center>
              <button id="nextWord" onClick={this.renderNextCard}>
                Next Word
              </button>
            </center>
          </div>

          {/* <div className="cardBack">
            <button onclick="flip()">Flip to Front</button>
            <h1>Back of Card</h1>
            <p>This side can hold an image and also the voice button.</p>
            <button>Say it!</button>
          </div> */}
        </div>
      </div>
    );
  }

  /*{/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script>
function flip() {
    $(`.card`).toggleClass(`rotate`);
}
</script> */
}

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

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
    };
  }

  getWordsAPI = () => {
    console.log(this.state.words);
    axios
      .request(options)
      .then((response) => {
        this.setState({
          words: response.data.typeOf,
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

  renderCards = () => {
    let allWords = this.state.words;

    let cardWordEntries = [];

    for (let i = 0; i < allWords.length; i++) {
      cardWordEntries.push(
        <div id="card" className="card">
          <div className="cardFront">
            {/* <button onclick="flip()" id="flipback">Flip to Back</button> */}
            <h1>{allWords[i]}</h1>
            {/* <p>This side can hold the word from the array.</p> */}
            <center>
              <Speech text={allWords[i]} />
            </center>
            <center>
              <button id="nextWord">Next Word</button>
            </center>
          </div>

          {/* <div className="cardBack">
            <button onclick="flip()">Flip to Front</button>
            <h1>Back of Card</h1>
            <p>This side can hold an image and also the voice button.</p>
            <button>Say it!</button>
          </div> */}
        </div>
      );
    }
    return cardWordEntries;
  };

  render() {
    return <div className="mainContainer">{this.renderCards()}</div>;
  }

  /*{/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script>
function flip() {
    $(`.card`).toggleClass(`rotate`);
}
</script> */
}

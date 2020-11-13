import React, { Component } from 'react';
import '../FlashSpeech/cards.css';
import Speech from 'react-speech';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import speakBub from "../../images/speakbub.JPG"

const axios = require('axios');

const api = {
  method: 'GET',
  url: 'https://rapidapi.p.rapidapi.com/words/car/typeOf',
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
    this.handleWordChange = this.handleWordChange.bind(this);
  }

  getWordsAPI = (api) => {
    console.log(this.state.api);
    axios
      .request(api)
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
    this.getWordsAPI(api);
  }

  renderNextCard = () => {
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

  handleWordChange = (event) => {
    this.setState({ currentWord: event.target.value });
  };

  searchForWord = () => {
    console.log(this.state.currentWord);
    const api = {
      method: 'GET',
      url: `https://rapidapi.p.rapidapi.com/words/${this.state.currentWord}/typeOf`,
      headers: {
        'x-rapidapi-key': '0fc2d0a77cmshbe792af71542bf5p134800jsn3fa7dd925eba',
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
      },
    };

    console.log(api);

    this.getWordsAPI(api);
  };

  render() {
    return (
      <div className="mainContainer">
        <FormControl>
          <TextField
            id="outlined-helperText"
            label="Search a word"
            placeholder="Enter a word..."
            onChange={this.handleWordChange}
            variant="outlined"
          />
          <Button variant="contained" onClick={this.searchForWord}>
            Search
          </Button>
        </FormControl>
        <div id="card" className="card">
          <div className="cardFront">
            {/* <button onclick="flip()" id="flipback">Flip to Back</button> */}
            <h1>{this.state.currentWord}</h1>
            {/* <p>This side can hold the word from the array.</p> */}
            <center>
              <Speech text={this.state.currentWord} /><img src={speakBub} id ="speakBub"></img>
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

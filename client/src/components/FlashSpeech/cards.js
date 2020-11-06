import React, { Component } from "react";
import "../FlashSpeech/cards.css";
import Speech from 'react-speech';

class Cards extends Component {
  state = {
    word: "testing"
  };
  render() {
    return (
      <div className="mainContainer">
        <div id="card" className="card">
          <div className="cardFront">
            <button onclick="flip()">Flip to Back</button>
            <h1>Front of Card</h1>
            <Speech text={this.state.word} />;
            <p>This side can hold the word from the array.</p>
            <button>All caps</button>
            <button>Lower case</button>
          </div>

          <div className="cardBack">
            <button onclick="flip()">Flip to Front</button>
            <h1>Back of Card</h1>
            <p>This side can hold an image and also the voice button.</p>
            <button>Say it!</button>
          </div>
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

export default Cards;

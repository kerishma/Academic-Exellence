import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';
import './memory.css';

// function MemoryCards() {
class MemoryCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memory_array: [
        'dog',
        'dog',
        'hand',
        'hand',
        'old ',
        'old',
        'eat',
        'eat',
        'one',
        'one',
        'red',
        'red',
        'books',
        'books',
        'sky',
        'sky',
        'apple',
        'apple',
        'door',
        'door',
        'cat',
        'cat',
        'foot',
        'foot',
        'new',
        'new',
        'sleep',
        'sleep',
        'two',
        'two',
        'orange',
        'orange',
        'toys',
        'toys',
        'trees',
        'trees',
        'banana',
        'banana',
        'wall',
        'wall',
        'bird',
        'bird',
        'face',
        'face',
        'happy',
        'happy',
        'sit',
        'sit',
        'three',
        'three',
        'yellow',
        'yellow',
        'bed',
        'bed',
        'roads',
        'roads',
        'grape',
        'grape',
        'floor',
        'floor',
        'fox',
        'fox',
      ],
      memory_values: [],
      memory_tile_ids: [],
      tiles_flipped: 0,
      isFlipped: true,
    };

    this.clickedTile = this.clickedTile.bind(this);
  }

  memory_tile_shuffle = () => {
    let tiles = this.state.memory_array;
    let i = this.state.memory_array.length,
      j,
      temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = tiles[j];
      tiles[j] = tiles[i];
      tiles[i] = temp;
    }
    console.log(' ShuffleArray', tiles);
    //updating memory array
    this.setState({
      memory_array: tiles,
    });
  };
  componentDidMount() {
    this.memory_tile_shuffle();
  }
  newBoard = () => {
    // tiles_flipped = 0;
    let output = '';
    // memory_array.memory_tile_shuffle();
    for (let i = 0; i < this.state.memory_array.length; i++) {
      output +=
        '<div id="tile_' +
        i +
        '" onclick="memoryFlipTile(this,\'' +
        this.state.memory_array[i] +
        '\')"></div>';
    }
    // this.state.memory_array('memory_board').innerHTML = output;
  };
  // memoryFlipTile=(tile,val)=>{
  // 	if(tile.innerHTML == "" && memory_values.length < 2){
  // 		tile.style.background = '#FFF';
  // 		tile.innerHTML = val;
  // 		if(memory_values.length == 0){
  // 			memory_values.push(val);
  // 			memory_tile_ids.push(tile.id);
  // 		} else if(memory_values.length == 1){
  // 			memory_values.push(val);
  // 			memory_tile_ids.push(tile.id);
  // 			if(memory_values[0] == memory_values[1]){
  // 				tiles_flipped += 2;
  // 				// Clear both arrays
  // 				memory_values = [];
  //             	memory_tile_ids = [];
  // 				// Check to see if the whole board is cleared
  // 				if(tiles_flipped == memory_array.length){
  // 					alert("Board cleared... generating new board");
  // 					document.getElementById('memory_board').innerHTML = "";
  // 					newBoard();
  // 				}
  // 			} else {
  // 				function flip2Back(){
  // 				    // Flip the 2 tiles back over
  // 				    var tile_1 = document.getElementById(memory_tile_ids[0]);
  // 				    var tile_2 = document.getElementById(memory_tile_ids[1]);
  // 				    tile_1.style.background = 'url(https://static.vecteezy.com/system/resources/thumbnails/000/553/435/small/apple_006.jpg) no-repeat';
  //             	    tile_1.innerHTML = "";
  // 				    tile_2.style.background = 'url(https://static.vecteezy.com/system/resources/thumbnails/000/553/435/small/apple_006.jpg) no-repeat';
  //             	    tile_2.innerHTML = "";
  // 				    // Clear both arrays
  // 				    memory_values = [];
  //             	    memory_tile_ids = [];
  // 				}
  // 				setTimeout(flip2Back, 700);
  // 			}
  // 		}
  // 	}
  // }
  clickedTile(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  //   flip = () => {
  //     this.setState({
  //       flipped: !this.state.flipped,
  //       clicked: true,
  //     });
  //   };

  render() {
    return (
      <div className="mainContainer">
        <div id="memory_board">
          {this.state.memory_array.map((tile, index) => {
            return (
              <div>
                <ReactCardFlip
                  isFlipped={this.state.isFlipped}
                  flipDirection="vertical"
                >
                  <div
                    className="frontCard"
                    id={index}
                    onClick={this.clickedTile}
                  >
                    <h1>{tile}</h1>
                  </div>
                  <div
                    className="backCard"
                    id={index}
                    onClick={this.clickedTile}
                  >
                    <h1>Flip</h1>
                  </div>
                </ReactCardFlip>
              </div>
            );
          })}
        </div>
        {/* <button id="newbtn" onClick={newBoard}>New</button> */}
      </div>
    );
  }
}

export default MemoryCards;

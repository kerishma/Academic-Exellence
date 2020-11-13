import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';
import './memory.css';
import M from "materialize-css";

class MemoryCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickDisabled:false,
      memory_array: [
        // 'dog',
        'dog',
        // 'hand',
        'hand',
        // 'old ',
        'old',
        // 'eat',
        // 'eat',
        // 'one',
        // 'one',
        // 'red',
        // 'red',
        // 'books',
        // 'books',
        // 'sky',
        // 'sky',
        // 'apple',
        // 'apple',
        // 'door',
        // 'door',
        // 'cat',
        // 'cat',
        // 'foot',
        // 'foot',
        // 'new',
        // 'new',
        // 'sleep',
        // 'sleep',
        // 'two',
        // 'two',
        // 'orange',
        // 'orange',
        // 'toys',
        // 'toys',
        // 'trees',
        // 'trees',
        // 'banana',
        // 'banana',
        // 'wall',
        // 'wall',
        // 'bird',
        // 'bird',
        // 'face',
        // 'face',
        // 'happy',
        // 'happy',
        // 'sit',
        // 'sit',
        // 'three',
        // 'three',
        // 'yellow',
        // 'yellow',
        // 'bed',
        // 'bed',
        // 'roads',
        // 'roads',
        // 'grape',
        // 'grape',
        // 'floor',
        // 'floor',
        // 'fox',
        // 'fox',
      ],
      memory_values: [],
      memory_tile_ids: "",
      tiles_flipped: 0,
      isFlipped: {},
      shuffled_array: []
    };

    this.clickedTile = this.clickedTile.bind(this);
  }

  tileClick = (word, tile) => {
    if (
      this.state.clickDisabled 
    ) return;
    this.setState({isFlipped:{...this.state.isFlipped,[tile]:true}, memory_tile_ids:tile})
    if (
      this.state.memory_values.length > 1
    ) return;
    this.setState({memory_values:[...this.state.memory_values, word]})
    if (
      this.state.memory_values.length === 1
      ) {
        return this.isMatch(tile)
      };
    }

    isMatch = (tile) => {
      const firstTile = this.state.memory_tile_ids;
      this.setState({clickDisabled:true})
      setTimeout(() => {
        if (
          this.state.memory_values[0] !== this.state.memory_values[1]
        ) {this.setState({isFlipped:{...this.state.isFlipped,[tile]:false, [firstTile]:false}})}
        this.setState({memory_values:[], memory_tile_ids:"", clickDisabled:false}) 
        this.checkIfWon()
      },1000)
    }
  
  checkIfWon = () => {
    let count = 0;
    for (let tile in this.state.isFlipped) {
      if (tile) count ++
    }
    if (count === this.state.shuffled_array.length) {this.setState({isFlipped:{}}); M.toast({ html: "Congratulations! You One!", classes: "#43A047 green darken-1" }); this.memory_tile_shuffle(); 
    }


    console.log(count)
    console.log(this.state.shuffled_array.length)
  }

  memory_tile_shuffle = () => {
    let tiles = [...this.state.memory_array, ...this.state.memory_array];
    let i = tiles.length,
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
      shuffled_array: tiles,
    });
  };

  componentDidMount() {
    this.memory_tile_shuffle();
  }

  newBoard = () => {
    let output = '';
    for (let i = 0; i < this.state.memory_array.length; i++) {
      output +=
        '<div id="tile_' +
        i +
        '" onclick="memoryFlipTile(this,\'' +
        this.state.memory_array[i] +
        '\')"></div>';
    }
  };

  clickedTile = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  };

  render() {
    return (
      <div>
        <p>Click the apple and match the words!</p>
      <div className="mainContainer">
        <div id="memory_board">
          {this.state.shuffled_array.map((tile, index) => (
            <EachCard data={tile} isFlipped={this.state.isFlipped[index]} tileIndex={index} flip={this.tileClick} key={`card-${index}`} />
          ))}
          </div>
        </div>
      </div>
    );
  }
}

const EachCard = ({ data, flip, tileIndex, isFlipped}) => {
  // const [isFlipped, setIsFlipped] = React.useState(false);
  return (
    <ReactCardFlip isFlipped={!isFlipped} flipDirection="vertical">
      <div className="frontCard">
        {data}
      </div>
      <div onClick={() => {flip(data, tileIndex) }} className="backCard">
      .
      </div>
    </ReactCardFlip>
  );
};

export default MemoryCards;

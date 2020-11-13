import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';
import './memory.css';

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
      <div className="mainContainer">
        <div id="memory_board">
          {this.state.memory_array.map((tile, index) => (
            <EachCard data={tile} key={`card-${index}`} />
          ))}
        </div>
      </div>
    );
  }
}

const EachCard = ({ data }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  return (
    <ReactCardFlip isFlipped={!isFlipped} flipDirection="vertical">
      <div onClick={() => setIsFlipped((prev) => !prev)} className="frontCard">
        {data}
      </div>
      <div onClick={() => setIsFlipped((prev) => !prev)} className="backCard">
        Flip
      </div>
    </ReactCardFlip>
  );
};

export default MemoryCards;

import React from 'react';
import Speech from 'react-speech';

function FlashSpeech(props) {
  console.log(props.word);
  return <Speech text={props.word} />;
}


export default FlashSpeech;

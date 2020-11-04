import React from 'react';
import Speech from 'react-speech';

function FlashSpeech(props) {
  console.log(props);
  return <Speech text={props} />;
}

export default FlashSpeech;

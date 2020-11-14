import { Button } from '@material-ui/core';
import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

function FlashSpeech(props) {
  const { speak } = useSpeechSynthesis();
  console.log(props.word);
  return <Button onClick={() => speak({ text: props.word })} id= "speakBub" style={{backgroundImage: `url(images/speakbub.JPG)`}}/>;
}


export default FlashSpeech;

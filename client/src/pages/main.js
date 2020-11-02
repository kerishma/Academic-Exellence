import React from 'react';
import NavBar from '../components/NavBar/index';
import FlashSpeech from '../components/flashSpeech';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Main() {
  return FlashSpeech('testing');
}

export default Main;

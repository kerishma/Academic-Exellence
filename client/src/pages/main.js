import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/navBar/Navbar';
// import FlashSpeech from '../components/FlashSpeech';
import Cards from '../components/FlashSpeech/cards';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// const wordsAPI = require('../../../routes/API/words');
// console.log(wordsAPI);

function Main() {
  return (
    <Router>
      <div>
        <Navbar />
        <Cards />
      </div>
    </Router>
  );
  // return FlashSpeech('testing');
}

export default Main;

import React from 'react';
import navBar from '../components/navBar/Navbar';
// import FlashSpeech from '../components/FlashSpeech';
import Cards from '../components/FlashSpeech/cards';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Main() {
  return (
    <div>
    {/* <FlashSpeech word ="testing"/> */}
    <Cards/>
    </div>
  )
  // return FlashSpeech('testing');
}



export default Main;

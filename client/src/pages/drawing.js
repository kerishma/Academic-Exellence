import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from '../components/navBar/Navbar';
// import FlashSpeech from '../components/FlashSpeech';
import DrawingCanvas from "../components/Drawing/";


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Drawing() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <DrawingCanvas />
      </div>
    </Router>
  )
}



export default Drawing;

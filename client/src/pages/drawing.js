import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/navBar/Navbar';
// import FlashSpeech from '../components/FlashSpeech';
import Drawing from "../components/Drawing/";


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function DrawingCanvas() {
  return (
    <Router>
    <div>
      <Navbar />
      <Drawing />
    </div>
    </Router>
  )
}



export default DrawingCanvas;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from '../components/navBar/Navbar';


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MemoryCards from '../components/Memory';

function Memory() {
  return (
    <Router>
    <div>
      <MemoryCards />
    </div>
    </Router>
  )
}



export default Memory;
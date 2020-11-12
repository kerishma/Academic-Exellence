import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from '../components/navBar/Navbar';
import logo from "../images/logo.JPG";
import "../css/landing.css"


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Landing() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}<br></br>
        <h2>Pick an activity above!</h2>
        <img src={logo} alt="Logo" id="mainLogo"></img>
      </div>
    </Router>
  )
}



export default Landing;

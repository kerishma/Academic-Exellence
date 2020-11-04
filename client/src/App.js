import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import main from './pages/main';
import '../src/css/style.css';
import Login from './pages/login';
import Signup from './pages/signup';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from "./components/navBar/Navbar"

import FlashSpeech from './components/FlashSpeech/index';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/main" component={main} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import '../src/css/style.css';
import Login from './pages/login';
import Header from './components/Header';
import Footer from './components/Footer';

import FlashSpeech from './components/flashSpeech/index';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

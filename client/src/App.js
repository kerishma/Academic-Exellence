import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';
import main from './pages/main';
import '../src/css/style.css';
import Login from './pages/login';
import Signup from './pages/signup';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from "./components/navBar/Navbar"
import Landing from "./pages/landing";
import Coloring from "./pages/coloring";
import Drawing from "./pages/drawing";

import FlashSpeech from './components/FlashSpeech/index';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function App() {
  const location = useLocation();
  return (
    // <Router>
      <div>
        {location.pathname !=="/signup" && location.pathname !=="/" && <Navbar />}
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/main" component={main} />
          <Route exact path="/coloring" component={Coloring} />
          <Route exact path="/drawing" component={Drawing} />
        </Switch>
        <Footer />
      </div>
    // </Router>
  );
}

export default App;

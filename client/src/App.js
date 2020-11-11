import React, { useContext, createContext, useReducer, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Main from './pages/main';
import '../src/css/style.css';
import Login from './pages/login';
import Signup from './pages/signup';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from "./components/navBar/Navbar"
import Landing from "./pages/landing";
import Memory from "./pages/memory";
import Drawing from "./pages/drawing";

import FlashSpeech from './components/FlashSpeech/index';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { reducer, initialState } from "./reducers/useReducer"
export const UserContext = createContext()



const Routing = () => {
  const location = useLocation();
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      history.push("/landing")
    } else {
      history.push('/')
    }
  }, [])
  return (
    <div>

      {location.pathname !== "/signup" && location.pathname !== "/" && <Navbar />}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/memory" component={Memory} />
        <Route exact path="/drawing" component={Drawing} />
      </Switch>
      <Footer />
    </div>
  )


}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state: state, dispatch }}>


      <Routing />



    </UserContext.Provider>
  );
} export default App;

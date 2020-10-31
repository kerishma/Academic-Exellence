import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "./pages/main";
import "../src/css/style.css";
import Login from "./pages/login"

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Main} />
        {/* <Footer /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

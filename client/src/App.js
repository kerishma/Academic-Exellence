import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import navBar from "./component/navBar";
import "../public/css/style";
import Login from "./component/pages/login"

function App() {
  return (
    <Router>
      <div>
        <Login />
        <navBar />
        <Route exact path="/" component={Home} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

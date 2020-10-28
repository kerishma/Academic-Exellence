import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import navBar from "./component/pages/navBar";
import "../public/css/style";

function App() {
  return (
    <Router>
      <div>
        <navBar />
        <Route exact path="/" component={Home} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

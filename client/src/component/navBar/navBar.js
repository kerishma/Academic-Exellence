import React from "react";
import { Link, useLocation } from "react-router-dom";

function navBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">aCademic eXellence</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
              <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Home
        </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Flashcards</a> */}
              <Link to="/" className={location.pathname === "/flashCards" ? "nav-link active" : "nav-link"}>
                            Flashcards
        </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Stuff</a> */}
              <Link to="/" className={location.pathname === "/#" ? "nav-link active" : "nav-link"}>
                            Stuff
        </Link>
            </li>
            <li className="nav-item dropdown">
              {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Topics</a> */}
              <Link to="/" className={location.pathname === "/#" ? "nav-link active" : "nav-link"}>
                            Topics
        </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                {/* <a className="dropdown-item" href="#">Action</a> */}
                <Link to="/" className={location.pathname === "/#" ? "nav-link active" : "nav-link"}>
                            Home
        </Link>
                {/* <a className="dropdown-item" href="#">Another action</a> */}
                <Link to="/" className={location.pathname === "/#" ? "nav-link active" : "nav-link"}>
                            Home
        </Link>
                {/* <a className="dropdown-item" href="#">Something else here</a> */}
                <Link to="/" className={location.pathname === "/#" ? "nav-link active" : "nav-link"}>
                            Home
        </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  export default navBar;
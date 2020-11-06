import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from "../Button";
import "./Navbar.css";

class Navbar extends Component {
    state = {clicked: false}
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems navbar navbar-expand-lg">
                <h3 className="navbar-logo">aCademic eXellence<i className="fab">
                    </i></h3>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar


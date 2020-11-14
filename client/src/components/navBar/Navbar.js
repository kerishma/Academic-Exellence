import React, { Component, useContext, useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import { MenuItems } from "./MenuItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from "../Button";


import "./Navbar.css";
import { UserContext } from "../../App"
import { set } from "mongoose";

const Navbar = () => {
    const { dispatch } = useContext(UserContext);
    const history = useHistory();
    const [click, setClick] = useState(false)

    return (

        <nav className="NavbarItems navbar navbar-expand-lg">
            <h3 className="navbar-logo">aCademic eXellence<i className="fab">
            </i></h3>
            <div className="menu-icon" onClick={() => setClick(!click)} >
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li onClick={item.title === "Logout" ? () => {
                            localStorage.clear()
                            dispatch({ type: "CLEAR" })
                            history.push('/')
                        } : null} key={index}>
                            <Link className={item.cName} to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}</ul>


        </nav>
    )





}


export default Navbar
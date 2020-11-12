import React, { Component, useContext, useState, useEffect, useRef } from "react";
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from "../../../src/App";
import M from 'materialize-css'

const LogoutButton = () => {
    const searchModal = useRef(null)
    const [search, setSearch] = useState('')
    const [userDetails, setUserDetails] = useState([])
    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()
    return (

        <button className="btn #c62828 red darken-3"
            onClick={() => {
                localStorage.clear()
                dispatch({ type: "CLEAR" })
                history.push('/signup')
            }}
        >
            Logout
        </button>
    )
}

export default LogoutButton                    
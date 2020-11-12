import React, { useState, useEffect } from "react";
import "../css/signup.css";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

function Signup() {
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const PostData = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "please enter a valid email" })
            return
        }
        fetch("/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    //toast
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })

                }
                else {
                    //toast
                    M.toast({ html: data.message, classes: "#43a047 green darken-1" })


                    history.push("/")
                }

            })
    }
    return (
        <div>


            <div id="loginbox" className="container">
                <div className="row justify-content-center center">

                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col">

                        <form className="login">
                            <div className="form-group">
                                <label for="formGroupExampleInput" className="labels">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="user-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter you Email" />
                            </div>
                            <div className="form-group">
                                <label for="formGroupExampleInput2" className="labels">Create Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Choose a good Password!" />
                            </div>
                        </form>
                        <button onClick={() => PostData()}>Sign Up</button>


                    </div>

                </div>
                <p>Already an eXellerater? login <Link to="/">Login</Link></p>

            </div>
        </div>
    )
}

export default Signup;
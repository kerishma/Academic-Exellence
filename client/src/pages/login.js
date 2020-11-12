import React, { useState, useContext, useReducer } from "react";
import "../css/login.css";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";
import { UserContext } from "../App"
// import logo from "../../public/images/logo.JPG"




function Login() {
    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const PostData = (e) => {
        e.preventDefault()
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "invalid email", classes: "#c62828 red darken-3" })
            return
        }
        fetch("/", {
            method: "post",
            headers: {
                "Content-Type": "Application/json"

            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(res => res.json()
        )
            .then(data => {
                if (data.error) {
                    //toast
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })

                }
                else {
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("user", JSON.stringify(data.user))

                    // reducer
                    dispatch({ type: "USER", payload: data.user })
                    // toast
                    M.toast({ html: "Successfully logged in", classes: "#43a047 green darken-1" })
                    history.push("/landing")
                }

            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <div>

            <div id="loginbox" className="container">
            {/* <img src={logo} alt="Logo"></img> */}
                <div className="row justify-content-center center">

                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col">

                        <form className="login" onSubmit={PostData} >
                            <div className="form-group">
                                <label for="formGroupExampleInput" className="labels">Email</label>
                                <input type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control" id="user-input"
                                    placeholder="Enter Email" />
                            </div>
                            <div className="form-group">
                                <label for="formGroupExampleInput2" className="labels">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"
                                    id="password-input"
                                    placeholder="Enter Password" />
                            </div>
                            <button>Login</button>

                        </form>



                    </div>

                </div>
                <p>Want to eXell? Start <Link to="/signup">Here</Link></p>

            </div>
        </div>
    )
}

export default Login;
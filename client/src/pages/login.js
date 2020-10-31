import React from "react";
import "../css/login.css";

function Login() {
    return (
        <div>

            <img src="../assets/imgs/StacheLogoBlack.jpg" id="logo" width="35%" />
            <div id="loginbox" className="container">
                <div className="row justify-content-center center">

                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col">

                        <form className="login">
                            <div className="form-group">
                                <label for="formGroupExampleInput" className="labels">User Name</label>
                                <input type="text" className="form-control" id="user-input" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label for="formGroupExampleInput2" className="labels">Password</label>
                                <input type="password" className="form-control" id="password-input" placeholder="" />
                            </div>
                        </form>
                        <img id="submit" src="../assets/imgs/subutton.JPG" width="65%" />


                    </div>

                </div>
                <p>Want to eXell? Start <a href="#">here!</a></p>

            </div>
        </div>
    )
}

export default Login;
import "../utils/style/SignIn.css";
import { useEffect } from "react";
// import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";

function SignIn() {
    useEffect(() => { document.title = "Argent Bank - Connexion" })
    return (
        <div>
            <Nav isSignIn={false} />
            <div className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    {/* TODO: Change method when getting call API */}
                    <form method="GET" action="/user">
                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        {/* PLACEHOLDER DUE TO STATIC SITE */}
                        {/* <NavLink to="/user" className="sign-in-button">Sign In</NavLink> */}
                        {/* SHOULD BE THE BUTTON BELOW */}
                        {/* <button className="sign-in-button">Sign In</button> */}
                        <input type="submit" className="sign-in-button" value="Sign In" />
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SignIn;
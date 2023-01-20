import "../utils/style/SignIn.css";
import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";
import { useNavigate } from "react-router";
import { login } from "../services/APIService";
// import { loginFail, loginSuccess } from "../redux";
// import { useDispatch, useSelector } from "react-redux";

function SignIn() {
    useEffect(() => { document.title = "Argent Bank - Connexion" });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const [data, setData] = useState(null);
    // const [token, setToken] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            let actualData = await login(email, password);

            // check for error response
            if (!actualData.body) {
                // get error message from body or default to response status
                const error = (actualData && actualData.message) || actualData.status;
                return Promise.reject(error);
            }

            // setData(actualData);
            // setToken(actualData.body.token);
            localStorage.setItem("userToken", actualData.body.token);
            console.log(`Status ${actualData.status} : ${actualData.message} | Token : ${actualData.body.token}`);
            navigate(`/profile`)
        } catch (error) {
            // setError(error.toString());
            console.error('There was an error!', error);
        }
    }

    return (
        <div>
            <Nav isLogged={false} />
            <div className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={submitHandler}>
                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SignIn;
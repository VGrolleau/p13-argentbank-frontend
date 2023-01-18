import "../utils/style/SignIn.css";
import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";
import { useNavigate } from "react-router";
// import { loginFail, loginSuccess } from "../redux";
// import { useDispatch, useSelector } from "react-redux";

function SignIn() {
    useEffect(() => { document.title = "Argent Bank - Connexion" });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [data, setData] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };
        // fetch('http://localhost:3001/api/v1/user/login', requestOptions)
        fetch(`http://192.168.1.12:3001/api/v1/user/login`, requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                setData(data);
                setToken(data.body.token);
                console.log(`Status ${data.status} : ${data.message} | Token : ${data.body.token}`);
            })
            .catch(error => {
                setError(error.toString());
                console.error('There was an error!', error);
            });
    }

    if (token) {
        navigate(`/profile/${token}`)
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
                        {/* PLACEHOLDER DUE TO STATIC SITE */}
                        {/* <NavLink to="/user" className="sign-in-button">Sign In</NavLink> */}
                        {/* SHOULD BE THE BUTTON BELOW */}
                        <button className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SignIn;
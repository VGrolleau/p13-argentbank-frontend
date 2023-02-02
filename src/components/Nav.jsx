import "../utils/style/Nav.css";
import argentBankLogo from "../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { disconnectUser } from "../redux";
import { useNavigate } from "react-router";

function Nav() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const selectorLogged = useSelector((state) => state.user.isLogged);
    let isLogged;
    localStorage.getItem("userToken") ? isLogged = true : isLogged = selectorLogged;
    setTimeout(() => {
        if (localStorage.getItem("userFirstname")) {
            document.getElementById("nav-user-firstname").textContent = localStorage.getItem("userFirstname");
        }
    }, 100);

    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            {isLogged
                ? <div>
                    <NavLink to="/profile" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        <span id="nav-user-firstname">Tony</span>
                    </NavLink>
                    <NavLink to="/" className="main-nav-item" onClick={() => localStorage.getItem("userToken") ? disconnect(navigate) : dispatch(disconnectUser())}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </NavLink>
                </div>
                : <div>
                    <NavLink to="/login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
            }
        </nav>
    )
}

function disconnect(navigate) {
    localStorage.clear();
    navigate("/");
    window.location.reload();
}

export default Nav;
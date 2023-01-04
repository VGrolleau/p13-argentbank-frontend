import "../utils/style/Nav.css";
import argentBankLogo from "../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";

function NavSignOut() {
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
            <div>
                <NavLink to="/user" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Tony
                </NavLink>
                <NavLink to="/" className="main-nav-item">
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </NavLink>
            </div>
        </nav>
    )
}

export default NavSignOut;
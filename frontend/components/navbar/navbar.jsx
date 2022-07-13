import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ logout }) => {
    return (
        <div>

            <button className="session-end" onClick={logout}>Logout</button>
            <br />
            <Link to="/login" className="login-form-link">Login</Link>
        </div>
    )
}


export default NavBar;
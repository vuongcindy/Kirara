import React from "react";

const NavBar = ({ logout }) => (
    <button className="session-end" onClick={logout}>Logout</button>
)

export default NavBar;
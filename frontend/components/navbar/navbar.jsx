import React from "react";

const NavBar = ({ logout }) => {
    console.log(logout)
    return (

        <button className="session-end" onClick={logout}>Logout</button>
    )
}


export default NavBar;
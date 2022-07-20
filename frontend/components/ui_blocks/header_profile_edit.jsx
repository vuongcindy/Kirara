import React from "react";
import { Link } from "react-router-dom";

class HeaderProfileEdit extends React.Component {
    render() {
        return (
            <div className="header-edit-container">
                <img src={window.logoURL} className="logo"/>
                <Link to="/select-profile">
                   <input className="select-profile-link" type="submit" value="Done"/>
               </Link>
            </div>
        )
    }
}

export default HeaderProfileEdit;
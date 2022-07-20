import React from "react";
import { Link } from "react-router-dom";

class HeaderProfileIndex extends React.Component {
    render() {
        return (
            <div className="header-index-container">
                <img src={window.logoURL} className="logo"/>
                <Link to="/edit-profiles" className="edit-profile-button">
                    <button className="edit-profile-form-link">Edit Profiles</button>
                </Link>
            </div>
        )
    }
}

export default HeaderProfileIndex;
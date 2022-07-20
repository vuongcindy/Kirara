import React from "react";
import { Link } from "react-router-dom";
import HeaderProfileIndex from "../ui_blocks/header_profiles_index"

class Profiles extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProfiles();
    }

    render() {
        return (
            <div className="profile-container">
                <HeaderProfileIndex />
                <h1>Who's watching?</h1>    
                <ul className="profile-image-container">
                    {this.props.profiles.map((profile) => {
                        return (
                            <li key={profile.id}>
                                <Link to="/home">
                                    <img src={profile.avatar} className="avatar"/>
                                    {profile.profile_name}
                                </Link>
                            </li>
                        )
                    })}
                    <Link to="/add-profile">
                        <button>
                            <i className="fa fa-plus" id="add-profile-button" ></i>
                        </button>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Profiles;
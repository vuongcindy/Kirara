import React from "react";
import { Link } from "react-router-dom";
import HeaderProfileIndex from "../ui_blocks/header_profiles_index"

class Profiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentProfile: ""
        }
        this.handleProfileClick = this.handleProfileClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchProfiles();
    }

    handleProfileClick(e, id) {
        console.log("profileId", id)
        console.log("this.props", this.props)
        e.preventDefault();
        const currentProfile = this.props.profiles[id];

        this.props.receiveCurrentProfile(currentProfile);

        // this.setState({ currentProfile: id })

        this.props.fetchProfile(id)
            .then(() => this.props.history.push("/home"));
    }

    render() {

        return (
            <div className="profile-container">
                <HeaderProfileIndex />
                <h1>Who's watching?</h1>    
                <ul className="profile-image-container">
                    {Object.entries(this.props.profiles).map(([profileId, profile]) => {
                        return (
                            <li key={profileId}>
                                <div onClick={(e) => this.handleProfileClick(e, profileId)}>
                                    <img src="https://kirara.s3.us-west-1.amazonaws.com/lightsaber_boy.jpg" className="avatar"/>
                                    {profile.profile_name}
                                </div>
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
import React from "react";
import { Link } from "react-router-dom";
import HeaderEditProfile from "../ui_blocks/header_profile_edit"

class EditProfiles extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProfiles();
    }

    render() {
        return (
            <div className="edit-profile-container">
                <HeaderEditProfile />
               <h1>Edit Profiles</h1>
               <br />
               <h2>Select a profile to edit</h2>
               <br />
               {/* <Link to="edit-profiles/:id">
                   <input className="profile-edit-link" type="submit" value="edit singular profile"/>
               </Link> */}
               <ul className="profile-image-container">
                    {this.props.profiles.map((profile) => {
                        return (
                            <li key={profile.id}>
                                <Link to={`/edit-profiles/${profile.id}`}>
                                    <img src={profile.avatar} className="avatar"/>
                                    {profile.profile_name}
                                </Link>
                                
                                {/* <button onClick={this.handleProfileClick}> */}
                                
                                {/* </button> */}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default EditProfiles;
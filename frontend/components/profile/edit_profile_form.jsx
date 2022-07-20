import React from "react";
import { Link } from "react-router-dom";
import HeaderProfileEdit from "../ui_blocks/header_profile_edit";

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.profile;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    componentDidMount() {
        // console.log("o", this.props);
        this.props.fetchProfile(this.props.profileId)
    }

    handleSubmit(e) {
        e.preventDefault();
        // const currentProfile = Object.assign({}, this.state);
        this.props.processForm(this.state)
            .then(() =>
                this.props.history.push("/select-profile")
            )
    }

    handleDeleteClick(e) {
        e.preventDefault();
        // console.log(this.props)
        this.props.deleteProfile(this.props.profile.id);
        this.props.history.push("/select-profile")
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }
    
    render() {
        // console.log("props", this.props);
        return (
            <div className="edit-profile-form-container">
                {/* <HeaderProfileEdit /> */}
                
                <div className="profile-form-container">
                <h1>Edit Profile</h1>
                <br />
                    <form onSubmit={(e) => this.handleSubmit(e)}> 
                    <div className="edit-profile-form">
                        <div className="edit-form-text">
                            <input type="text" value={this.state.profile_name} onChange={this.update('profile_name')} className="edit-profile-input"/> 
                        </div>
                        <br />
                        {/* <div className="edit-form-image"> */}
                            {/* <img src={profile.avatarURL} className="avatar"/> */}
                        {/* </div> */}
                        <input className="submit-edit-button" type="submit" value="Done"/>
                    </div> 
                    </form>
                    <br />
                    <Link to="/select-profile">
                        <button className="delete-profile-button" onClick={ (e) => this.handleDeleteClick(e) }>Delete Profile</button>
                    </Link>
                    
                </div>
            </div>
        )
    }
}

export default EditProfileForm;
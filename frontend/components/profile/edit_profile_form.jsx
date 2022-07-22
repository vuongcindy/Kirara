import React from "react";
import { Link } from "react-router-dom";
import HeaderProfileEdit from "../ui_blocks/header_profile_edit";

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    componentDidMount() {
        // console.log("o", this.props);
        this.props.fetchProfiles()
    }

    componentDidUpdate(prevProps) {
        if (this.props.profile) {
            if (prevProps.profile !== this.props.profile) {
                this.setState({
                    profile_name: this.props.profile.profile_name,
                    id: this.props.profile.id
                })
            }
        }
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
        console.log("props", this.props.profileId)
        this.props.deleteProfile(this.props.profileId)
            .then(() =>
                this.props.history.push("/select-profile")
            )
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }
    
    render() {
        // debugger
        // if (!this.props.profile) return null;
        // this.setState({
        //     profile_name: this.props.profile.profile_name,
        //     user_id: this.props.profile.user_id,
        //     id: this.props.profile.id
        // })
        // console.log("props", this.props.profile);
        return (
            <div className="edit-profile-form-container">
                {/* <HeaderProfileEdit /> */}
                
                <div className="profile-form-container">
                <h1>Edit Profile</h1>
                <br />
                    <form onSubmit={this.handleSubmit}> 
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
                    <button className="delete-profile-button" onClick={this.handleDeleteClick}>Delete Profile</button>
                </div>
            </div>
        )
    }
}

export default EditProfileForm;
import React from "react";
import { Link } from "react-router-dom";

class CreateProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAvatarClick = this.handleAvatarClick.bind(this);
    }

    handleSubmit(e) { 
        e.preventDefault();
        this.props.processForm(this.state)
            .then(() => 
                this.props.history.push("/select-profile")
            )
    }

    handleAvatarClick(e) {
        e.preventDefault();
        let avatarImg = e.target.src;
        return this.setState({ avatar: avatarImg })
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value}
        );
    }

    render() {
        return (
            <div className="create-profile-form-container">
                <h1>Add Profile</h1>
                <br />
                {/* <img src={this.state.avatar ? this.state.avatar : window.cindyURL} className="avatar"/> */} 
                {/* <br />
                <div className="avatar-container">
                    <img src="https://kirara.s3.us-west-1.amazonaws.com/lightsaber_boy.jpg" onClick={ (e) => this.handleAvatarClick(e) } alt="lightsaber-boy-avatar" />
                </div>
                <div className="avatar-container">
                    <img src="https://kirara.s3.us-west-1.amazonaws.com/chubby_smile.jpeg" 
                    onClick={ (e) => this.handleAvatarClick(e) } alt="chubby-smile-avatar" />
                </div> */}
                <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Profile Name" onChange={this.update('profile_name')} className="create-profile-input"/> 
                <br />
                <br />
                <input className="create-profile-button" type="submit" value="Save"/>
                </form>
                <Link to="/select-profile">
                    <button>Cancel</button>
                </Link>
            </div>
        )
    }
}

export default CreateProfileForm;
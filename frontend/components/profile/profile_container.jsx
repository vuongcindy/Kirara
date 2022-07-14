import { connect } from "react-redux";
import Profile from "./profile";
import { fetchProfiles, createProfile, updateProfile, deleteProfile } from "../../actions/profile_actions"

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = dispatch => {
    fetchProfiles
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
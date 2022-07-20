import { connect } from "react-redux";
import { fetchProfile, updateProfile, deleteProfile } from "../../actions/profile_actions";
import EditProfileForm from "./edit_profile_form"

const mapStateToProps = ( state, ownProps ) => {
    console.log(state.entities.profiles[ownProps])
    return {
        profile: state.entities.profiles[ownProps.match.params.id],
        profileId: ownProps.match.params.id,
        formType: 'Update Profile'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (profile) => dispatch(updateProfile(profile)),
        fetchProfile: (profileId) => dispatch(fetchProfile(profileId)),
        deleteProfile: (profileId) => dispatch(deleteProfile(profileId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm)
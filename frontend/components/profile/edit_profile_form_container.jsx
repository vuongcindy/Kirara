import { connect } from "react-redux";
import { fetchProfile, updateProfile, deleteProfile,fetchProfiles } from "../../actions/profiles_actions";
import EditProfileForm from "./edit_profile_form"

const mapStateToProps = ( state, ownProps ) => {
    // console.log(state.entities.profiles[profile])
    // debugger
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
        deleteProfile: (profileId) => dispatch(deleteProfile(profileId)),
        fetchProfiles: () => dispatch(fetchProfiles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm)
import { connect } from "react-redux";
import EditProfiles from "./edit_profiles";
import { fetchProfiles, fetchProfile } from "../../actions/profile_actions"

const mapStateToProps = state => ({
    profiles: Object.values(state.entities.profiles),
    userProfiles: state.entities.profiles
});

const mapDispatchToProps = dispatch => ({
    fetchProfiles: () => dispatch(fetchProfiles()),
    fetchProfile: (profileId) => dispatch(fetchProfile(profileId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfiles)
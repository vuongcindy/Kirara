import { connect } from "react-redux";
import Profiles from "./select_profile"
import { fetchProfile, fetchProfiles, receiveCurrentProfile } from "../../actions/profiles_actions"

const mapStateToProps = state => ({
    profiles: state.entities.profiles,
});

const mapDispatchToProps = dispatch => ({
    fetchProfiles: () => dispatch(fetchProfiles()),
    fetchProfile: (profileId) => dispatch(fetchProfile(profileId)),
    receiveCurrentProfile: (id) => dispatch(receiveCurrentProfile(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profiles)
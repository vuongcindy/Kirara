import { connect } from "react-redux";
import CreateProfileForm from "./create_profile_form";
import { createProfile } from "../../actions/profile_actions"

const mapStateToProps = state => ({
    profile: { profile_name: '' },
    formType: 'Create Profile'
})

const mapDispatchToProps = dispatch => ({
    processForm: (profile) => dispatch(createProfile(profile))
})

export default connect(mapStateToProps,mapDispatchToProps)(CreateProfileForm)
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { receiveCurrentProfile, fetchProfile } from '../../actions/profiles_actions'
import Nav from './nav';

const mapStateToProps = state => {
    return {
        currentProfile: state.session.currentProfile
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    receiveCurrentProfile: (profileId) => dispatch(receiveCurrentProfile(profileId)),
    fetchProfile: (id) => dispatch(fetchProfile(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
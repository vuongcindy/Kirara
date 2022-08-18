import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchVideos } from '../../actions/videos_actions'
import Home from "./home"

const mapStateToProps = state => {
  return {
    currentProfile: state.session.currentProfile
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  receiveCurrentProfile: (profileId) => dispatch(receiveCurrentProfile(profileId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
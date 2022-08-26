import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchVideo, fetchVideos } from '../../actions/videos_actions'
import { receiveCurrentProfile, fetchProfile } from '../../actions/profiles_actions'
import Home from "./home"

const mapStateToProps = (state, ownProps) => {
  console.log('state', state, ownProps)
  return {
    currentProfile: state.session.currentProfile
  };
  console.log('state2', state)

};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  receiveCurrentProfile: (profileId) => dispatch(receiveCurrentProfile(profileId)),
  fetchProfile: (id) => dispatch(fetchProfile(id)),
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
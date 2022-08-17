import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchVideos } from '../../actions/video_actions'
import Home from "./home"

const mapStateToProps = ( state, ownProps ) => {
  return {
    currentUser: state.entities.users[state.session.id],
    videos: Object.values(state.entities.videos),
    video: state.entities.videos[ownProps.match.params.videoId]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchVideos: () => dispatch(fetchVideos()),
  fetchVideo: (videoId) => dispatch(receiveVideo(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
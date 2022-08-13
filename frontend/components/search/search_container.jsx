import { connect } from 'react-redux';
import Search from './search';
// import { withRouter } from 'react-router';
// import { useNavigate } from 'react-router';
import { fetchVideos } from '../../actions/video_actions';

const mapStateToProps = state => {
  return {
    videos: Object.values(state.entities.videos)
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchVideos: () => dispatch(fetchVideos())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
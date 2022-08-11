import { connect } from "react-redux"
import VideoPlayback from "./video_playback"
import { fetchVideo } from "../../actions/video_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        video: state.entities.videos[ownProps.match.params.id]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchVideo: videoId => dispatch(fetchVideo(videoId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayback);
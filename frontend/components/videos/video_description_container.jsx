import { connect } from "react-redux";
import VideoDescription from "./video_description";
import { fetchVideo } from "../../actions/video_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        video: state.entities.videos[ownProps.match.params.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchVideo: videoId => dispatch(fetchVideo(videoId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoDescription)
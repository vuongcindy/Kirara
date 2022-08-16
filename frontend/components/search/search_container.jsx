import { connect } from "react-redux";
import Search from "./search";
import { fetchVideos } from "../../actions/video_actions";

const mapStateToProps = state => {
    return {
        videos: Object.values(state.entities.videos)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchVideos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
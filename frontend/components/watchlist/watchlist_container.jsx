import { connect } from "react-redux";
import { fetchVideos } from "../../actions/video_actions"
import Watchlist from "./watchlist";

const mapStateToProps = state => {
    // debugger
    return {
        currentUser: state.entities.users[state.session.id],
        videos: state.entities.videos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchVideos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);
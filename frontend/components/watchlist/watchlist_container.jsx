import { connect } from "react-redux";
import { fetchVideos } from "../../actions/videos_actions";
import { fetchWatchlistItems } from "../../actions/watchlist_actions";
import Watchlist from "./watchlist";

const mapStateToProps = state => {
    console.log("state", state)
    return {
        currentUser: state.session.users,
        currentProfile: state.session.currentProfile.id,
        watchlists: state.entities.watchlists,
        videos: state.entities.videos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchVideos()),
        fetchWatchlistItems: () => dispatch(fetchWatchlistItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);
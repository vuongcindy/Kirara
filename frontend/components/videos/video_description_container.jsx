import { connect } from "react-redux";
import VideoDescription from "./video_description";
import { fetchVideo } from "../../actions/videos_actions";
import { createWatchlistItem, deleteWatchlistItem } from "../../actions/watchlist_items_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        video: state.entities.videos[ownProps.match.params.id],
        currentProfile: state.session.currentProfile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchVideo: videoId => dispatch(fetchVideo(videoId)),
        createWatchlistItem: watchlist_item => dispatch(createWatchlistItem(watchlist_item)),
        deleteWatchlistItem: watchlistItemId => dispatch(deleteWatchlistItem(watchlistItemId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoDescription)
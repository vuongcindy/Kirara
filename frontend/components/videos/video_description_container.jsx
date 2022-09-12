import { connect } from "react-redux";
import VideoDescription from "./video_description";
import { fetchVideo } from "../../actions/videos_actions";
import { createWatchlistItem, deleteWatchlistItem, fetchWatchlistItem, fetchWatchlistItems } from "../../actions/watchlist_items_actions";
import { logout } from "../../actions/session_actions";
import { receiveCurrentProfile } from "../../actions/profiles_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        video: state.entities.videos[ownProps.match.params.id],
        currentProfile: state.session.currentProfile,
        watchlist_items: Object.values(state.entities.watchlist_items).filter((watchlist_item) => watchlist_item),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchVideo: videoId => dispatch(fetchVideo(videoId)),
        createWatchlistItem: watchlistItem => dispatch(createWatchlistItem(watchlistItem)),
        deleteWatchlistItem: watchlistItemId => dispatch(deleteWatchlistItem(watchlistItemId)),
        fetchWatchlistItems: () => dispatch(fetchWatchlistItems()),
        fetchWatchlistItem: watchlistItemId => dispatch(fetchWatchlistItem(watchlistItemId)),
        receiveCurrentProfile: profileId => dispatch(receiveCurrentProfile(profileId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoDescription)
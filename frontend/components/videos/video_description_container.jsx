import { connect } from "react-redux";
import VideoDescription from "./video_description";
import { fetchVideo } from "../../actions/videos_actions";
import { createWatchlistItem, deleteWatchlistItem, fetchWatchlistItems } from "../../actions/watchlist_items_actions";
import { logout } from "../../actions/session_actions";
import { receiveCurrentProfile } from "../../actions/profiles_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        video: state.entities.videos[ownProps.match.params.id],
        currentProfile: state.session.currentProfile,
        watchlist_item: state.session.currentProfile.watchlist_items,
        // watchlistItemId: state.entities.videos.watchlist_item.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchVideo: videoId => dispatch(fetchVideo(videoId)),
        createWatchlistItem: watchlistItem => dispatch(createWatchlistItem(watchlistItem)),
        deleteWatchlistItem: watchlistItemId => dispatch(deleteWatchlistItem(watchlistItemId)),
        fetchWatchlistItems: () => dispatch(fetchWatchlistItems()),
        // receiveCurrentProfile: profileId => dispatch(receiveCurrentProfile(profileId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoDescription)
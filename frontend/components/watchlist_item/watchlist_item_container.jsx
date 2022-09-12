import { connect } from "react-redux";
import { fetchVideos } from "../../actions/videos_actions";
import { fetchWatchlistItems } from "../../actions/watchlist_items_actions";
import WatchlistItem from "./watchlist_item";

const mapStateToProps = state => {

    return {
        currentProfile: state.session.currentProfile.id,
        // watchlist: state.session.currentProfile.watchlist_items,
        watchlist: Object.values(state.entities.watchlist_items).filter((watchlist_item) => watchlist_item),
        videos: state.entities.videos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchVideos()),
        fetchWatchlistItems: () => dispatch(fetchWatchlistItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistItem);

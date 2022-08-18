import * as WatchlistAPIUtil from "../util/watchlist_api_util";

export const RECEIVE_WATCHLIST_ITEMS = "RECEIVE_WATCHLIST_ITEMS";
export const RECEIVE_WATCHLIST_ITEM = "RECEIVE_WATCHLIST_ITEM";
export const REMOVE_WATCHLIST_ITEM = "REMOVE_WATCHLIST_ITEM";

export const receiveWatchlistItems = watchlist_items => ({
    type: RECEIVE_WATCHLIST_ITEMS,
    watchlist_items
});

export const receiveWatchlistItem = watchlist_item => ({
    type: RECEIVE_WATCHLIST_ITEM,
    watchlist_item
});

export const removeWatchlistItem = watchlistItemId => ({
    type: REMOVE_WATCHLIST_ITEM,
    watchlistItemId
});

export const fetchWatchlistItems = () => dispatch => {
    WatchlistAPIUtil.fetchWatchlistItems()
        .then(watchlist_items => dispatch(receiveWatchlistItems(watchlist_items)))
};

export const fetchWatchlistItem = watchlistItemId => dispatch => {
    return WatchlistAPIUtil.fetchWatchlistItem(watchlistItemId)
        .then(
            watchlist_item => {
                dispatch(receiveWatchlistItem(watchlist_item))
            }
        )
};

export const createWatchlistItem = watchlist_item => dispatch => (
    WatchlistAPIUtil.createWatchlistItem(watchlist_item)
        .then(watchlist_item => dispatch(receiveWatchlistItem(watchlist_item)))
);

export const deleteWatchlistItem = watchlistItemId => dispatch (
    WatchlistAPIUtil.deleteWatchlistItem(watchlistItemId)
        .then(() => dispatch(removeWatchlistItem(watchlistItemId)))
);
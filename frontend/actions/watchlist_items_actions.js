import * as WatchlistAPIUtil from "../util/watchlist_item_api_util";

export const RECEIVE_WATCHLIST_ITEMS = "RECEIVE_WATCHLIST_ITEMS";
export const RECEIVE_WATCHLIST_ITEM = "RECEIVE_WATCHLIST_ITEM";
export const REMOVE_WATCHLIST_ITEM = "REMOVE_WATCHLIST_ITEM";

export const receiveWatchlistItems = watchlistItems => ({
    type: RECEIVE_WATCHLIST_ITEMS,
    watchlistItems
});

export const receiveWatchlistItem = watchlistItem => ({
    type: RECEIVE_WATCHLIST_ITEM,
    watchlistItem
});

export const removeWatchlistItem = watchlistItemId => ({
    type: REMOVE_WATCHLIST_ITEM,
    watchlistItemId
});

export const fetchWatchlistItems = () => dispatch => (
    WatchlistAPIUtil.fetchWatchlistItems()
        .then(watchlistItems => dispatch(receiveWatchlistItems(watchlistItems)))
);

export const fetchWatchlistItem = watchlistItemId => dispatch => (
    WatchlistAPIUtil.fetchWatchlistItem(watchlistItemId)
        .then(watchlistItem => dispatch(receiveWatchlistItem(watchlistItem)))
);

export const createWatchlistItem = watchlistItem => dispatch => (
    WatchlistAPIUtil.createWatchlistItem(watchlistItem)
        .then(watchlistItem => dispatch(receiveWatchlistItem(watchlistItem)))
);

export const deleteWatchlistItem = watchlistItemId => dispatch => (
    WatchlistAPIUtil.deleteWatchlistItem(watchlistItemId)
        .then(() => dispatch(removeWatchlistItem(watchlistItemId)))
);
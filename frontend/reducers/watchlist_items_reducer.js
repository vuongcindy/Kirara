import {
    RECEIVE_WATCHLIST_ITEMS,
    RECEIVE_WATCHLIST_ITEM,
    REMOVE_WATCHLIST_ITEM
} from "../actions/watchlist_items_actions";

const watchlistItemReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_WATCHLIST_ITEMS:
            return action.watchlist_items;
        case RECEIVE_WATCHLIST_ITEM:
            nextState[action.watchlistItemId] = action.watchlistItemId
            return nextState;
        case REMOVE_WATCHLIST_ITEM:
            delete nextState[action.watchlistItemId]
            return nextState;
        default:
            return state;
    }
}

export default watchlistItemReducer;
import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import profileReducer from "./profiles_reducer"
import videoReducer from "./videos_reducer";
import watchlistItemReducer from "./watchlist_items_reducer";

const entitiesReducer = combineReducers({

    user: usersReducer,
    profiles: profileReducer,
    videos: videoReducer,
    watchlist_items: watchlistItemReducer
    
});

export default entitiesReducer;
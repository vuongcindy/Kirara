import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import profileReducer from "./profiles_reducer"
import videoReducer from "./videos_reducer";

const entitiesReducer = combineReducers({

    user: usersReducer,
    profiles: profileReducer,
    videos: videoReducer,
    
});

export default entitiesReducer;
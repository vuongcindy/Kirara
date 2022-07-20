import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import profileReducer from "./profiles_reducer"

const entitiesReducer = combineReducers({

    users: usersReducer,
    profiles: profileReducer
    
});

export default entitiesReducer;
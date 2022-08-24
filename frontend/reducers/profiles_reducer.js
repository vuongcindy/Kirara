import {
    RECEIVE_PROFILES,
    RECEIVE_PROFILE,
    REMOVE_PROFILE,
    REDO_PROFILE
} from "../actions/profiles_actions";

const profileReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PROFILES:
            // action.profiles.forEach((profile) => nextState[profile.id] = profile);
            // return nextState;
            return action.profiles;
        case RECEIVE_PROFILE:
            nextState[action.profile.id] = action.profile
            return nextState
        case REMOVE_PROFILE:
            delete nextState[action.profileId]
            return nextState;
        case REDO_PROFILE:
            return nextState[action.profileId]
        default:
            return state;
    }
}

export default profileReducer;
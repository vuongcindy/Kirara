import {
    RECEIVE_PROFILES,
    RECEIVE_PROFILE,
    REMOVE_PROFILE
} from "../actions/profile_actions";

const profileReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PROFILES:
            action.profiles.forEach((profile) => nextState[profile.id] = profile);
            return nextState;
        case RECEIVE_PROFILE:
            nextState[action.profile.id] = action.profile
            return nextState
        case REMOVE_PROFILE:
            delete nextState[action.profile.id]
            return nextState
        default:
            return state;
    }
}

export default profileReducer;
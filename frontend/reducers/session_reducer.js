import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from "../actions/session_actions";
import { RECEIVE_CURRENT_PROFILE } from "../actions/profiles_actions";

const _nullUser = Object.freeze({
    id: null,
    currentProfile: null
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id }
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        case RECEIVE_CURRENT_PROFILE:
            nextState.currentProfile = action.profileId
            // if (window.localStorage.currentProfile == undefined) {
            //     window.localStorage.setItem("currentProfile", parseInt(action.profileId.id))
            // }
            return nextState;
        default:
            return state;
    }
}

export default sessionReducer;
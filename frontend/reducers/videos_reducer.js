import {
    RECEIVE_VIDEOS,
    RECEIVE_VIDEO
} from "../actions/videos_actions";

const videoReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            nextState[action.video.id] = action.video
            return nextState;
        default:
            return state;
    }
}

export default videoReducer;
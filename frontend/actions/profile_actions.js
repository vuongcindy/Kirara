import * as ProfileAPIUtil from "../util/profile_api_util";

export const RECEIVE_PROFILES = "RECEIVE_PROFILES";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const REMOVE_PROFILE = "REMOVE_PROFILE";

export const receiveProfiles = profiles => ({
    type: RECEIVE_PROFILES,
    profiles
});

export const receiveProfile = profile => ({
    type: RECEIVE_PROFILE,
    profile
});


export const removeProfile = profileId => ({
    type: REMOVE_PROFILE,
    profileId
});

export const fetchProfiles = () => dispatch => (
    ProfileAPIUtil.fetchProfiles()
        .then(profiles => dispatch(receiveProfiles(profiles)))
);

export const createProfile = profile => dispatch => (
    ProfileAPIUtil.createProfile(profile)
        .then(profile => dispatch(receiveProfile(profile)))
);

export const updateProfile = profile => dispatch => (
    ProfileAPIUtil.updateProfile(profile)
        .then(profile => dispatch(receiveProfile(profile)))
);

export const deleteProfile = profileId => dispatch => (
    ProfileAPIUtil.deleteProfile(profileId)
        .then(() => dispatch(deleteProfile(profileId)))
);
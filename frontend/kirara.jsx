import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { login, logout } from "./actions/session_actions"
import { fetchProfiles, createProfile, updateProfile, deleteProfile } from "./util/profile_api_util"


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                user: { [window.currentUser.id]: window.currentUser }
            },
            session: { 
                id: window.currentUser.id
                // currentProfile: window.currentProfile.id
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    //Testing start
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.logout = logout;
    window.fetchProfiles = fetchProfiles;
    window.createProfile = createProfile;
    window.updateProfile = updateProfile;
    window.deleteProfile = deleteProfile;
    // Testing End
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    // ReactDOM.render(<h1>It's working</h1>, root);
});
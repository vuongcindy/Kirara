import React from "react";
import { Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import HomeContainer from "./home/home_container";
import SplashContainer from "./splash/splash_container";
import SelectProfileContainer from "./profile/select_profile_container";
import EditProfileContainer from "./profile/edit_profiles_container";
import EditProfileFormContainer from "./profile/edit_profile_form_container";
import CreateProfileFormContainer from "./profile/create_profile_form_container";
import VideoDescriptionContainer from "./videos/video_description_container";
import VideoPlaybackContainer from "./videos/video_playback_container";

const App = () => (
    <div className="app-container">
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/select-profile" component={SelectProfileContainer} />
            <ProtectedRoute exact path="/add-profile" component={CreateProfileFormContainer} />
            <ProtectedRoute path="/edit-profiles/:id" component={EditProfileFormContainer} />
            <ProtectedRoute exact path="/edit-profiles" component={EditProfileContainer} />
            <ProtectedRoute exact path="/home" component={HomeContainer} />
            <ProtectedRoute path="/movies/:id" component={VideoDescriptionContainer} />
            <ProtectedRoute path="/watch" component={VideoPlaybackContainer} />
            {/* <ProtectedRoute path="series/:id" component={VideoDescriptionContainer} /> */}
            <AuthRoute exact path="/" component={SplashContainer} />
        </Switch>

    </div>
);

export default App;
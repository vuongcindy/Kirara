import React from "react";
import { 
    Route,
    Switch,
} from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Footer from "./footer/footer";
import HomeContainer from "./home/home_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util"
import SplashContainer from "./splash/splash_container"

const App = () => (
    <div className="app-container">
        <header>
            <h1>Kirara</h1>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/home" component={HomeContainer} />
            <AuthRoute exact path="/" component={SplashContainer} />
        </Switch>
        <footer>
            <Footer />
        </footer>
    </div>
);

export default App;
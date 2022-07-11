import React from "react";
import { 
    Link,
    Route 
} from "react-router-dom";
import NavBar from "./navbar/navbar";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";

const App = () => (
    <div>
        <header>
            <h1>Kirara</h1>
            <NavBar />
        </header>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;
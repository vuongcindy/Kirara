import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import { Link } from "react-router-dom"

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.demoLogin = this.demoLogin.bind(this);
    }

    demoLogin() {
        const demoUser = {
            email: 'demo@gmail.com',
            password: '123456'
        }
        this.props.processForm(demoUser)
    }

    render() {
        if (!this.props) { 
            return null;
        } else {
            return (
                <div className="splash-container">
                    <NavBarContainer />
                    <Link to="/signup" className="splash-signup-form-link">Get the Kirara Bundle</Link>
                    <br />
                    <button className="demo-login-button" onClick={this.demoLogin}>Demo Login</button>
                </div>
            )
        }
    }
}

export default Splash;
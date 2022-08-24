import React from "react";
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
                    <img src={window.logoURL} className="logo"/>
                    <Link to="/login" className="splash-login-button">
                        <button className="splash-login-form-link">Log In</button>
                    </Link>
                    <br />
                    <Link to="/signup" className="splash-signup-button">
                        <button className="splash-signup-form-link">Get the Kirara bundle</button>
                    </Link>
                    <br />
                    <p>
                        Just stopping by?
                        &nbsp;
                        <button className="demo-login-button" onClick={this.demoLogin}>Demo Login</button>
                    </p>
                    <div className="footer-container">
                        <ul>
                            <Link to="https://www.linkedin.com/in/vuongcindy/"><li>LinkedIn</li></Link>
                            <Link to="https://angel.co/u/cindy-vuong-3"><li>AngelList</li></Link>
                            <Link to="https://github.com/vuongcindy"><li>GitHub</li></Link>
                            <Link to="https://github.com/vuongcindy/Kirara"><li>Project Repo</li></Link>
                        </ul>
                        <p className="copyright">
                            &copy; Kirara. All Rights Reserved
                        </p>
                    </div>
                </div>
            )
        }
    }
}

export default Splash;
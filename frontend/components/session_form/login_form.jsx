import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    demoLogin() {
        const demoUser = {
            email: 'demo@gmail.com',
            password: '123456'
        }
        this.props.processForm(demoUser)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key = {`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit}>
                    <h2>
                        Log in with your email
                    </h2>
                    {this.renderErrors()}
                    <br />
                    <div className="login-form">
                        <input type="text" placeholder="Email" onChange={this.update('email')} className="login-email-input"/>
                        <br />
                        <input type="password" placeholder="Password" onChange={this.update('password')} className="login-password-input"/>
                        <br />
                        <input className="login-submit" type="submit" value="Continue" />
                        <p>New to Kirara? <Link to="/signup" className="signup-form-link">Sign Up</Link></p> 
                        <br />    
                    </div>
                </form>
                <p className="demo">
                    Just stopping by?
                    &nbsp;
                    <button className="demo-login-button" onClick={this.demoLogin}>Demo Login</button>
                </p>
            </div>
        )
    }
}

export default LoginForm;
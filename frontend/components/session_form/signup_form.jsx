import React from "react";
import { Link } from "react-router-dom"

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    
    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
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
    
    componentWillUnmount() {
        this.props.removeErrors();
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit}>
                    <h2>
                        Sign up with your email
                    </h2>
                    {this.renderErrors()}
                    <br />
                    <div className="signup-form">
                        <input type="text" placeholder="Email" onChange={this.update('email')} className="signup-email-input"/>
                        <br />
                        <input type="password" placeholder="Password" onChange={this.update('password')} className="signup-password-input"/>
                        <br />
                        <input className="signup-submit" type="submit" value="Continue" />
                        <p>Have an account? <Link to="/login" className="login-form-link" onClick={this.removeErrors}>Login</Link></p> 
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupForm;
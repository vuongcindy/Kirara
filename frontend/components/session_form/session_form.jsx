import React from "react";
import { login } from "../../actions/session_actions"

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    demoLogin() {
        let demoUser = { email: 'demo@gmail.com', password: '123456'}
        login(demoUser);
    }

    componentWillUnmount() {
        this.props.removeErrors();
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

    render() {
        return (
            <div className="session-form-container">
                <form onSubmit={this.handleSubmit}>
                    Welcome to Kirara!
                    {this.renderErrors()}
                    <div className="session-form">
                        <label>Email:
                            <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input"/>
                        </label>
                        <br />
                        <label>Password:
                            <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input"/>
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType}/>
                        <br />
                        <button className="demo-login-button" onClick={this.demoLogin}>Demo Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;
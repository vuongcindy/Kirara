import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
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
    };

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
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
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit}>
                    Welcome to Kirara!
                    {this.renderErrors()}
                    <div className="login-form">
                        <label>Email:
                            <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input"/>
                        </label>
                        <br />
                        <label>Password:
                            <input type="pasword" value={this.state.password} onChange={this.update('password')} className="login-input"/>
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;
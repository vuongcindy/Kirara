import { connect } from "react-redux";
import React from "react";
import { login, removeErrors } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import LoginForm from "./login_form";


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Login',
        navLink: <Link to="/signup">Sign up Instead</Link>
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        removeErrors: () => dispatch(removeErrors())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
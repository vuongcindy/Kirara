import { connect } from "react-redux";
import React from "react";
import { signup, removeErrors } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import SignupForm from "./signup_form"

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Signup',
        navLink: <Link to="/login">Login Instead</Link>
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        removeErrors: () => dispatch(removeErrors())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
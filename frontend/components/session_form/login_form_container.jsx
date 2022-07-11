import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Login',
        navLink: <Link to="/signup">Sign up Instead</Link>
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(login(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
import { connect } from "react-redux";
import React from "react"
import { 
    withRouter, 
    Redirect, 
    Route 
} from "react-router-dom";


const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props => (
            !loggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to="/" />
            )
    )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route 
    path={path}
    exact={exact}
    render={props => (
        loggedIn? (
            <Component {...props} />
        ) : (
            <Redirect to="/login" />
        )
    )} />
);

const mapStateToProps = state => (
    { loggedIn: Boolean(state.session.id) }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
import { connect } from "react-redux";
import { login } from "../../actions/session_actions"
import Splash from "./splash";

const mapStateToProps = state => ({
    currentUser: state.entities.user[state.session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
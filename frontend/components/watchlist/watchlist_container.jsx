import { connect } from "react-redux";
import Watchlist from "./watchlist";

const mapStateToProps = state => {
    // debugger
    return {
        currentUser: state.entities.users[state.session.id],
        // currentProfile: 
    }
}

export default connect(mapStateToProps)(Watchlist);
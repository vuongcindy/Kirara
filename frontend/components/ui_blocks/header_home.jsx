import React from "react";
import { Link } from "react-router-dom"
import { logout } from "../../actions/session_actions"
class HeaderHome extends React.Component {
    render() {
        return (
            <div className="header-container">
                <img src={window.logoURL} className="logo"/>
                <div className="button-container">
                    <button>
                        <i className="fa fa-home" id="home-logo-button" ></i> &nbsp; 
                        <span>Home</span>
                    </button>
                    <button>
                        <i className="fa fa-search" id="search-logo-button" ></i> &nbsp; 
                        <span>Search</span>
                    </button>
                    <button>
                        <i className="fa fa-plus" id="plus-logo-button" ></i> &nbsp; 
                        <span>Watchlist</span>
                    </button>
                    <button>
                        <i className="fa fa-star" id="star-logo-button" ></i> &nbsp; 
                        <span>Studios</span>
                    </button>
                    <button>
                        <i className="fa fa-film" id="film-logo-button" ></i> &nbsp; 
                        <span>Movies</span>
                    </button>
                    <button>
                        <i className="fa fa-television" id="tv-logo-button" ></i> &nbsp; 
                        <span>Series</span>
                    </button>
                </div>
                <button className="session-end" onClick={logout}>Logout</button>
                <Link to="/edit-profiles">
                    <button>
                        <img src={window.cindyURL} className="edit-profile-button"/>
                    </button>
                </Link>
            </div>
        )
    }
}

export default HeaderHome;
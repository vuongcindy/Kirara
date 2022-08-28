import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick(e) {
        e.preventDefault();
        this.props.logout()
    }

    render () {
        <div className="header-container">
            <img src={window.logoURL} className="logo"/>
            <div className="button-container">
                <button>
                    <i className="fa fa-home" id="home-logo-button" ></i> 
                    &nbsp; 
                    <Link to="/home">
                        <span>Home</span>
                    </Link>
                </button>
                <button>
                    <i className="fa fa-search" id="search-logo-button" ></i> 
                    &nbsp; 
                    <Link to="/search">
                        <span>Search</span>
                    </Link>
                </button>
                <button>
                    <i className="fa fa-plus" id="plus-logo-button" ></i> 
                    &nbsp;
                    <Link to="/watchlist">
                        <span>Watchlist</span>
                    </Link> 
                </button>
                <button>
                    <i className="fa fa-star" id="star-logo-button" ></i> 
                    &nbsp; 
                    <span>Studios</span>
                </button>
                <button>
                    <i className="fa fa-film" id="film-logo-button" ></i> 
                    &nbsp; 
                    <span>Movies</span>
                </button>
                <button>
                    <i className="fa fa-television" id="tv-logo-button" ></i> 
                    &nbsp; 
                    <span>Series</span>
                </button>
            </div>
            <button className="session-end" onClick={this.handleLogoutClick}>Logout</button>
            <Link to="/edit-profiles">
                <button>
                    <img src="https://kirara.s3.us-west-1.amazonaws.com/chubby_smile.jpeg" className="edit-profile-button"/>
                </button>
            </Link>
        </div>
    }
}

export default Nav;
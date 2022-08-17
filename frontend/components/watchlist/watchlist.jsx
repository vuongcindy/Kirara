import React from "react";
import Footer from "../ui_blocks/footer";
import { Link } from "react-router-dom";

class Watchlist extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log("this.props", this.props)
        return (
            <div className="watchlist-container">
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
                            <span>Watchlist</span>
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
                    {/* <button className="session-end" onClick={this.handleLogoutClick}>Logout</button> */}
                    <Link to="/edit-profiles">
                        <button>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/chubby_smile.jpeg" className="edit-profile-button"/>
                        </button>
                    </Link>
                </div>
                <div className="watchlist-content">
                    <div className="watchlist-empty">
                        <h5>Your watchlist is empty</h5>
                        <span>Content you add to your watchlist will appear here.</span>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Watchlist;
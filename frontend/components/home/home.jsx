import React from "react"
// import Header from "../ui_blocks/header_home"
import { Link } from "react-router-dom";
import Carousel from "./carousel";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleLogoutClick(e) {
        e.preventDefault();
        this.props.logout()
    }

    handleClick(e) {
        e.preventDefault();
        this.props.history.push("/videos/1")
    }

    render () {
        return (
            <div className="home-container">
                <div className="header-container">
                <img src={window.logoURL} className="logo"/>
                    <div className="button-container">
                        <button>
                            <i className="fa fa-home" id="home-logo-button" ></i> 
                            &nbsp; 
                            <span>Home</span>
                        </button>
                        <button>
                            <i className="fa fa-search" id="search-logo-button" ></i> 
                            &nbsp; 
                            <span>Search</span>
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
                    <button className="session-end" onClick={this.handleLogoutClick}>Logout</button>
                    <Link to="/edit-profiles">
                        <button>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/chubby_smile.jpeg" className="edit-profile-button"/>
                        </button>
                    </Link>
                </div>


                {/* <Carousel /> */}
                <div className="preview-container">
                    <button onClick={this.handleClick}>
                        <img src="https://kirara.s3.us-west-1.amazonaws.com/mirai-thumbnail.jpeg" className="preview-placeholder"/>
                    </button>
                </div>
                <br />
                <div className="categories-container">
                    <div className="studio-container">
                        <img src="https://kirara.s3.us-west-1.amazonaws.com/studio-ghbili-thumbnail.jpeg" className="logo-placeholder"/>
                        <img src="https://kirara.s3.us-west-1.amazonaws.com/disney-logo.jpeg" className="logo-placeholder"/>
                        <img src="https://kirara.s3.us-west-1.amazonaws.com/cloverworks-thumbnail.jpeg" className="logo-placeholder"/>
                        <img src="https://kirara.s3.us-west-1.amazonaws.com/bandai-thumbnail.jpeg" className="logo-placeholder"/>
                        <img src="https://kirara.s3.us-west-1.amazonaws.com/netflix-logo.jpeg" className="logo-placeholder"/>
                    </div>
                    
                    <label className="genre">Adventure
                        <div className="adventure-genre-container">
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/lion-king-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/brother-bear-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/raya-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/kiki-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/mirai-thumbnail.jpeg" className="thumbnail-placeholder"/>
                        </div>
                    </label>
                    <br />
                    <label className="genre">Romance
                        <div className="romance-genre-container">
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/princess-mononoke-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/inuyasha-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/toradora-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/tarzan-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/love-is-blind-japan-thumbnail.jpeg" className="thumbnail-placeholder"/>
                        </div>
                    </label>
                    <br />
                    <label className="genre">Action
                    <br />
                        <div className="action-genre-container">
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/one-piece-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/spy-x-family-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/cowboy-bebop-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/arcane-league-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/naruto-thumbnail.jpeg" className="thumbnail-placeholder"/>
                        </div>
                    </label>
                    <br />
                </div>
                <div className="footer-container">
                    <ul>
                        <li>LinkedIn</li>
                        <li>AngelList</li>
                        <li>GitHub</li>
                        <li>Personal Website</li>
                        <li>Another Link</li>
                    </ul>
                    <br />
                    <p className="copyright">
                        &copy; Kirara. All Rights Reserved
                    </p>
                </div>
                
            </div>
        
        )
    }
}

export default Home;
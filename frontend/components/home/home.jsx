import React from "react"
// import HeaderHome from "../ui_blocks/header_home"
import { Link } from "react-router-dom";
// import Carousel from "./carousel";
import Footer from "../ui_blocks/footer";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
      
    }

    componentDidMount(){
        this.props.fetchVideos()
        this.props.receiveCurrentProfile(this.props.currentProfile)
        

        // console.log('this.props', this.props.currentProfile)
        // console.log('this.state', this.state)
        
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
                {/* <HeaderHome /> */}

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
                            <Link to="/videos/4">
                                <img src="https://kirara.s3.us-west-1.amazonaws.com/brother-bear-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            </Link>
                            <Link to="/videos/7">
                                <img src="https://kirara.s3.us-west-1.amazonaws.com/raya-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            </Link>
                            <Link to="/videos/5">
                                <img src="https://kirara.s3.us-west-1.amazonaws.com/kiki-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            </Link>
                            <Link to="/videos/1">
                                <img src="https://kirara.s3.us-west-1.amazonaws.com/mirai-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            </Link>
                        </div>
                    </label>
                    <br />
                    <label className="genre">Romance
                        <div className="romance-genre-container">
                            <Link to="/videos/6">
                                <img src="https://kirara.s3.us-west-1.amazonaws.com/princess-mononoke-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            </Link>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/inuyasha-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/toradora-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            <Link to="/videos/8">
                                <img src="https://kirara.s3.us-west-1.amazonaws.com/tarzan-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            </Link>
                            <Link to="/videos/9">
                                <img src="https://kirara.s3.us-west-1.amazonaws.com/love-is-blind-japan-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            </Link>
                        </div>
                    </label>
                    <br />
                    <label className="genre">Action
                    <br />
                        <div className="action-genre-container">
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/one-piece-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/spy-x-family-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/cowboy-bebop-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            <Link to="/videos/2">
                            <button>
                                <img src="https://kirara.s3.us-west-1.amazonaws.com/arcane-league-thumbnail.jpeg" className="thumbnail-placeholder"/>
                            </button>
                            </Link>
                            <Link to="/videos/3">
                                <button>
                                    <img src="https://kirara.s3.us-west-1.amazonaws.com/boruto-thumbnail.png" className="thumbnail-placeholder"/>
                                </button>
                            </Link>
                        </div>
                    </label>
                    <br />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;
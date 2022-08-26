import React from "react";
import Footer from "../ui_blocks/footer";
import { Link } from "react-router-dom";

class Watchlist extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     watchlist: []
        // }
        // this.checkWatchlistItem = this.checkWatchlistItem.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideos()
        // this.props.fetchWatchlistItems();
    }

    // checkWatchlistItem() {
    //     // check if watchlistitemid === video.id
    //     // return if true
    //     debugger
    //     const includedWatchlistItems = this.props.videos.filter((video) => {
    //         debugger
    //         const videoId = video.id
    //         const watchlistItemVideoId = this.props.watchlistItems.video_id;
    //         if (videoId === watchlistItemVideoId) {
    //             return video
    //         }
    //     })

    //     this.setState(prevState => ({ watchlist: [...prevState, includedWatchlistItems] }))
    // }

    render() {
        console.log("this.props", this.props)
        console.log("this.props.watchlist",this.props.watchlist)
        const {videos, watchlist} = this.props
        if (videos === undefined || watchlist === undefined) return null 

        let filteredVids = []
        for(let item of watchlist) {
            filteredVids.push(videos[item.video_id])
        }
        console.log("filtered", filteredVids)

        if (this.props.watchlist.length < 1) {
            return (
                <div className="watchlist-container">
                    <div className="watchlist-content">
                        <div className="watchlist-empty">
                            <h5>Your watchlist is empty</h5>
                            <span>Content you add to your watchlist will appear here.</span>
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        } else {
            return (
                <div className="watchlist-container">
                    <div className="watchlist-content">
                    {/* <div className="header-container">
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
                    <button className="session-end" onClick={this.handleLogoutClick}>Logout</button>
                    <Link to="/edit-profiles">
                        <button>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/chubby_smile.jpeg" className="edit-profile-button"/>
                        </button>
                    </Link>
                </div> */}
                    {filteredVids.map((video) => {
                    return (
                        <div className="video-container">
                        <Link to={`/videos/${video.id}`} key={video.id}>
                            {video.thumbnailUrl ? (
                            <div className="video-card">
                                <img src={video.thumbnailUrl} className="video-thumbnail"/>
                                {/* Cat */}
                                {/* {console.log(video.thumbnailUrl)} */}
                            </div>
                            ) : (
                            <div>
                                {video.title}
                            </div>
                            )
                            }
                        </Link>
                        </div>
                        )
                    // {console.log(video)}
                    })
                    }
                    render words lol
                    </div>
                    <Footer />
                </div>
            )
        }      
    }
}

export default Watchlist;
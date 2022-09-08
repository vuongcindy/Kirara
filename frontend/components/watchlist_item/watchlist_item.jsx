import React from "react";
import Footer from "../ui_blocks/footer";
import { Link } from "react-router-dom";
import Nav from "../nav/nav_container"

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
                    <Nav />
                    <div className="watchlist-empty-content">
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
                    <Nav />
                    <h1 className="watchlist-title">Watchlist</h1>
                    <h1 className="watchlist-subtitle">My Movies &amp; Series</h1> 
                    <div className="watchlist-content">
                    {/* <div className="search-result-container"> */}
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
                        {/* </div> */}
                    </div>
                    <Footer />
                </div>
            )
        }      
    }
}

export default Watchlist;
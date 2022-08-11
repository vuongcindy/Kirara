import React from "react";
import { Link } from "react-router-dom";

class VideoDescription extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleLogoutClick(e) {
        e.preventDefault();
        this.props.logout()
    }

    handleClick(e) {
        e.preventDefault();
        const currentVideo = document.getElementById('currentVideo');
        currentVideo
            .requestFullscreen()
            .then(() => currentVideo.classList.remove('hidden'))
            .then(() => currentVideo.play());
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.id)
    }

    render() {
        if (!this.props.video) {return null}
        // console.log(this.props.video.title)
        return (
            <div className="video-description-container">
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

                <div className="video-description-content">
                    <div className="video-title">
                        {this.props.video.title} <br />
                    </div>
                <div className="video-metadata">
                    {this.props.video.year}
                    &nbsp; • &nbsp;
                    {this.props.video.runtime} <br />
                </div>
                <div className="video-genre">
                    {this.props.video.genre} 
                </div>
                <div className="video-buttons">
                    <button className="play-button" onClick={this.handleClick}>
                        <i className="fa fa-play fa-1x" id="play-logo-button" ></i> 
                        <h3>Play</h3>
                    </button>
                    <video
                    src="https://kirara.s3.us-west-1.amazonaws.com/mirai-video.mp4"
                    controls
                    width='500px'
                    height='500px'
                    type='video/mp4'
                    className='hidden'
                    id='currentVideo'
                />
                </div>
                    <div className="video-description">
                        {this.props.video.description}
                    </div>
                </div>

                


                <div className="footer-container">
                    <ul>
                        <li>LinkedIn</li>
                        <li>AngelList</li>
                        <li>GitHub</li>
                        <li>Personal Website</li>
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

export default VideoDescription;

document.addEventListener('fullscreenchange', (e) => {
    const currentVideo = document.getElementById('currentVideo');
    if (!document.fullscreenElement) {
      document.exitFullscreen().catch(() => currentVideo.pause());
      currentVideo.classList.add('hidden');
    }
  });
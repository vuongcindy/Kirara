import React from "react";
import { Link } from "react-router-dom";
 
class VideoDescription extends React.Component {
   constructor(props) {
       super(props);
       this.handleWatchClick = this.handleWatchClick.bind(this);
       this.handleLogoutClick = this.handleLogoutClick.bind(this);
       this.runtimeConversion = this.runtimeConversion.bind(this);
       this.handleWatchlistAdd = this.handleWatchlistAdd.bind(this);
       this.handleWatchlistRemove = this.handleWatchlistRemove.bind(this);
   }
 
   handleLogoutClick(e) {
       e.preventDefault();
       this.props.logout()
   }
 
   handleWatchClick(e) {
       e.preventDefault();
       const currentVideo = document.getElementById('currentVideo');
       currentVideo
           .requestFullscreen()
           .then(() => currentVideo.classList.remove('hidden'))
           .then(() => currentVideo.play());
   }
 
   handleWatchlistAdd(e) {
       e.preventDefault();
       console.log('this.props', this.props)
       console.log('this.state', this.state)
       if (!this.props.video.watchlist_item || this.props.video.watchlist_item.profile_id !== this.props.currentProfile.id) {
           this.props.createWatchlistItem({profile_id: this.props.currentProfile.id, video_id: this.props.video.id})
       }
   }
 
   handleWatchlistRemove(e) {
       e.preventDefault();
       console.log('this.props', this.props)
       console.log('this.state', this.state)
       if (this.props.video.watchlist_item && this.props.video.watchlist_item.profile_id === this.props.currentProfile.id) {
           this.props.deleteWatchlistItem(this.props.video.watchlist_item.id)
       }
   }
 
   componentDidMount() {
       this.props.fetchVideo(this.props.match.params.id)
   }
 
   runtimeConversion(s) {
       var h = Math.floor(s / 3600);
       var m = Math.floor(s % 3600 / 60);
  
       var hDisplay = h > 0 ? h + (h == 1 ? "h " : "h ") : "";
       var mDisplay = m > 0 ? m + (m == 1 ? "m" : "m") : "";
       return hDisplay + mDisplay;
   }
 
   render() {
       if (!this.props.video) {return null}
       console.log("this.props",this.props)
       console.log("this.props.video.watchlist_item", this.props.video.watchlist_item)
       if (this.props.video.watchlist_item && this.props.video.watchlist_item.profile_id === this.props.currentProfile.id) {
           return (
               <div className="video-description-container" style={{backgroundImage: `url(${this.props.video.backgroundUrl})`}}>
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
                           <img src={this.props.video.thumbnailUrl} className="video-description-icon"/> <br />
                       </div>
                   <div className="video-metadata">
                       {this.props.video.year}
                       &nbsp; • &nbsp;
                       {this.runtimeConversion(this.props.video.runtime)} <br />
                   </div>
                   <div className="video-genre">
                       {this.props.video.genre}
                   </div>
                   <div className="video-buttons">
                      
                       <button className="play-button" onClick={this.handleWatchClick}>
                           <i className="fa fa-play fa-1x" id="play-logo-button" ></i>
                           <h3>Play</h3>
                       </button>
                       <button>
                           <i className="fa fa-minus" id="remove-watchlist-item-button" onClick={this.handleWatchlistRemove}></i>
                       </button>
                       <video
                       src={this.props.video.videoUrl}
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
       } else {
           return (
               <div className="video-description-container" style={{backgroundImage: `url(${this.props.video.backgroundUrl})`}}>
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
                           <img src={this.props.video.thumbnailUrl} className="video-description-icon"/> <br />
                       </div>
                   <div className="video-metadata">
                       {this.props.video.year}
                       &nbsp; • &nbsp;
                       {this.runtimeConversion(this.props.video.runtime)} <br />
                   </div>
                   <div className="video-genre">
                       {this.props.video.genre}
                   </div>
                   <div className="video-buttons">
                      
                       <button className="play-button" onClick={this.handleWatchClick}>
                           <i className="fa fa-play fa-1x" id="play-logo-button" ></i>
                           <h3>Play</h3>
                       </button>
                       <button>
                           <i className="fa fa-plus" id="add-watchlist-item-button" onClick={this.handleWatchlistAdd}></i>
                       </button>
                       <video
                       src={this.props.video.videoUrl}
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
}
 
export default VideoDescription;
 
document.addEventListener('fullscreenchange', (e) => {
    const currentVideo = document.getElementById('currentVideo');
    if (!document.fullscreenElement) {
     document.exitFullscreen()
       .catch(() => currentVideo.pause());
     currentVideo.classList
       .add('hidden');
    }
});

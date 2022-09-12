import React from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/nav_container"
import Footer from "../ui_blocks/footer"
 
class VideoDescription extends React.Component {
   constructor(props) {
       super(props);
    //    this.state = {
    //        watchlist: false
    //    }
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
        this.props.createWatchlistItem({profile_id: this.props.currentProfile.id, video_id: this.props.video.id})
            .then(() => this.props.fetchVideo(this.props.match.params.id))
            .then(() => this.props.receiveCurrentProfile(this.props.currentProfile))
            .then(() => this.props.fetchWatchlistItems())
        // this.setState({ watchlist: !this.state.watchlist})
        // this.forceUpdate()
        // window.location.reload(false);
   }

//    componentDidUpdate(prevState) {
//         if (this.state.watchlist !== prevState.watchlist) {
//             window.location.reload(false);
//         }
//    }
 
   handleWatchlistRemove(e) {
       e.preventDefault();
       for (let i = 0; i < this.props.watchlist_items.length; i++) {
        if (this.props.watchlist_items[i]["video_id"] === this.props.video.id) {
            this.props.deleteWatchlistItem(this.props.watchlist_items[i]["id"])
        }}
   }
 
   componentDidMount() {
        this.props.fetchVideo(this.props.match.params.id)
        this.props.receiveCurrentProfile(this.props.currentProfile)
            // .then(() => this.props.receiveCurrentProfile(this.props.currentProfile.id))
        this.props.fetchWatchlistItems()
   }
 
   runtimeConversion(s) {
       var h = Math.floor(s / 3600);
       var m = Math.floor(s % 3600 / 60);
  
       var hConverted = h > 0 ? h + (h == 1 ? "h " : "h ") : "";
       var mConverted = m > 0 ? m + (m == 1 ? "m" : "m") : "";
       return hConverted + mConverted;
   }
 
   render() {
       if (!this.props.video) {return null}
       if (!this.props.currentProfile) {return null}
       if (!this.props.watchlist_items) {return null}
       let is_watchlist_item = false
       for (let i = 0; i < this.props.watchlist_items.length; i++) {
           if (this.props.watchlist_items[i]["video_id"] === this.props.video.id
           && this.props.watchlist_items[i]["profile_id"] === this.props.currentProfile.id
           ) {
                is_watchlist_item = true
           }
       }
       if (is_watchlist_item === true) {
           return (
            //    <div>
            <div className="video-description-container" style={{backgroundImage: `url(${this.props.video.backgroundUrl})`}}> 
                   <Nav />
  
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
                           <i className="fa fa-check" id="remove-watchlist-item-button" onClick={this.handleWatchlistRemove}></i>
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
  
                   <Footer />
               </div>
           )
       } else {
           return (
            //    <div>
               <div className="video-description-container" style={{backgroundImage: `url(${this.props.video.backgroundUrl})`}}>
                   <Nav />
  
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
                       <button onClick={this.handleWatchlistAdd}>
                           <i className="fa fa-plus" id="add-watchlist-item-button"></i>
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
  
                   <Footer />
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

import React from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/nav_container"
import Footer from "../ui_blocks/footer"
 
class VideoDescription extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           watchlist: []
       }
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
    //    let videoId = this.props.video.id
        this.props.createWatchlistItem({profile_id: this.props.currentProfile.id, video_id: this.props.video.id})
        
   }
 
   handleWatchlistRemove(e) {
       e.preventDefault();
       console.log('this.props', this.props)
       console.log('this.state', this.state)
    //    if (this.props.video.watchlist_item && this.props.video.watchlist_item.profile_id === this.props.currentProfile.id) {
    // }
    // let videoId = this.props.video.id
        this.props.deleteWatchlistItem(this.props.video.watchlist_item.id)
        // .then(this.props.history.push(`/videos/${video.id}`))
   }
 
   componentDidMount() {
        this.props.fetchWatchlistItems()
            .then(this.props.fetchVideo(this.props.match.params.id))
    //    .then(() => this.props.receiveCurrentProfile(this.state.session.currentProfile.id))
   }
   
//    componentDidUpdate(prevProps, prevState) {
//     if (prevState.data !== this.state.data) {
//       // Now fetch the new data here.
//     }
//   }

//    componentWillUnmount() {
//        this.props.deleteWatchlistItem(this.props.video.watchlist_item.id)
//    }
 
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
       console.log("this.props",this.props)
       console.log("this.props.video.watchlist_item", this.props.video.watchlist_item)
       console.log("this.props.currentProfile.id", this.props.currentProfile.id)
       if (this.props.video.watchlist_item && this.props.video.watchlist_item.profile_id === this.props.currentProfile.id) {
           console.log(this.props.video)
           return (
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

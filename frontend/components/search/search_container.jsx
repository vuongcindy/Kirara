// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useLocation } from "react-router";
// import { fetchVideos } from "../../actions/video_actions";

// const SearchResult = () => {
//     const videos = useSelector(state => state.entities.videos)

//     let dispatch = useDispatch();
//     let location = useLocation();

//     const searchStr = location.pathname.split("/")[2];

//     useEffect(() => {
//         dispatch(fetchVideos())
//     }, []);

//     let searchResults = [];
//     let videoArr = Object.values(videos);
//     if (videoArr.length > 0) {
//         videoArr.forEach((video) => {
//             let title = video.title.toLowerCase();
//             let searchValue = searchStr.toLowerCase();

//             if (title.includes(searchValue)) {
//                 searchResults.push(video.id)
//             }
//         })
//     }
    
//     if (searchResults.length == 0) { 
//         return null 
//     } else {
//         return (
//             <div className="search-result-container">
//                 {/* <div className="video-cards-grid">
//                     { searchResults.map((videoId) => {
//                         return (
//                             <div className="video-card" key ={videoId}>
//                                 <VideoIndexCard video={videos[videoId]} key={videoId} />
//                             </div>
//                             )
//                         })
//                     }
//                 </div> */}
//                 Hi
//             </div>
//         )
//     }
// }

// export default SearchResult;

import { connect } from "react-redux";
import Search from "./search";
import { fetchVideos } from "../../actions/video_actions";

const mapStateToProps = state => {
    return {
        videos: Object.values(state.entities.videos)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchVideos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Footer from "../ui_blocks/footer";

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchStr: "",
      results: []
    }
    this.update = this.update.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  update(e) {
    const searchInput = e.target.value.toLowerCase();
    this.setState({ searchStr: searchInput })
    console.log("search input", searchInput)
    console.log("this.props.videos", this.props.videos)
    const searchResult = this.props.videos.filter((video) => {
      const title = video.title.toLowerCase();
      return title.includes(searchInput)
    })
    console.log("search result", searchResult)
    // console.log("this.props", this.props)

    this.setState({ results: searchResult })
  }

  // handleSearch(e) {
  //   e.preventDefault();
  //   this.props.videos
  // }

  render() {

    // const [searchStr, setSearchStr] = useState("");
  
    // const handleKeyPress = (e, searchStr) => {
    //   if (e.charCode === 13) {
    //     window.location.assign(`#/search/${searchStr}`)
    //   };
    // }
    // const searchResults = this.state.results.map((video) => (
      // <SearchResultItem video={video} key={index} />
      // {title}
      // ))
      // console.log("searchResults", searchResults)
      // console.log("this.state.searchStr", this.state.searchStr)
      // console.log("this.state.results", this.state.results)
      return (
        <div className="search-container">
            <div className="search-form-container">
              <input placeholder="Search by title" onChange={this.update} value={this.state.searchStr} className="search-input"/>
              {/* <button onClick={this.handleSearch}>hi</button> */}
            </div>
            {/* <div className="search-result-container">
              {this.state.results.map((videoId) => {
                return (
                  <div key={videoId} className="video-cards" >
                    {this.state.video.title}
                  </div>
                )
              })}
            </div> */}
          <Footer />
        </div>
      )
    
  }
}

export default Search;
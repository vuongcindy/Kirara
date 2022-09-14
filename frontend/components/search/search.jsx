import React from "react";
import { Link } from "react-router-dom";
import Footer from "../ui_blocks/footer";
import Nav from "../nav/nav_container";

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchStr: "",
      results: []
    }
    this.handleUpdate = this.handleUpdate.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  handleUpdate(e) {
    const searchInput = e.target.value.toLowerCase();
    this.setState({ searchStr: searchInput })
    const searchResult = this.props.videos.filter((video) => {
      const title = video.title.toLowerCase();
      return title.includes(searchInput)
    })

    this.setState({ results: searchResult })
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.videos
  }

  render() {
    if (this.state.results.length < 1) {
      return (
        <div className="search-container">
          <Nav />

            <div className="search-form-container">
              <input placeholder="Search by title" onChange={this.handleUpdate} value={this.state.searchStr} className="search-input"/>
              {/* <button onClick={this.handleSearch}>hi</button> */}
            </div>

            <div className="search-result-container">
              <h1>No results found</h1>
            </div>
          <Footer />
        </div>
      )
    } else {

      return (
        <div className="search-container">
          <Nav />
            <div className="search-form-container">
              <input placeholder="Search by title" onChange={this.handleUpdate} value={this.state.searchStr} className="search-input"/>
              {/* <button onClick={this.handleSearch}>hi</button> */}
            </div>

            <div className="search-result-container">
              {this.state.results.map((video) => {
                return (
                    <div className="video-container">
                  <Link to={`/videos/${video.id}`} key={video.id}>
                    {video.thumbnailUrl ? (
                      <div className="video-card">
                        <img src={video.thumbnailUrl} className="video-thumbnail"/>
                      </div>
                    ) : (
                      <div>
                        {video.title}
                      </div>
                    )}
                  </Link>
                    </div>
                )
              })}
            </div>
          <Footer />
        </div>
      )
    }
  }
}

export default Search;
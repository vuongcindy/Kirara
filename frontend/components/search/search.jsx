import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../ui_blocks/footer";

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
    console.log("search input", searchInput)
    console.log("this.props.videos", this.props.videos)
    const searchResult = this.props.videos.filter((video) => {
      const title = video.title.toLowerCase();
      return title.includes(searchInput)
    })
    console.log("search result", searchResult)

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
                    {/* <button className="session-end" onClick={this.handleLogoutClick}>Logout</button> */}
                    <Link to="/edit-profiles">
                        <button>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/chubby_smile.jpeg" className="edit-profile-button"/>
                        </button>
                    </Link>
                </div>

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
                    {/* <button className="session-end" onClick={this.handleLogoutClick}>Logout</button> */}
                    <Link to="/edit-profiles">
                        <button>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/chubby_smile.jpeg" className="edit-profile-button"/>
                        </button>
                    </Link>
                </div>

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
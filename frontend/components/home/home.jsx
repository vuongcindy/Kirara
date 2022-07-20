import React from "react"
import Header from "../ui_blocks/header_home"
import Footer from "../ui_blocks/footer"

const Home = ({ logout }) => {
    return (
        <div className="home-container">
            <Header />
            <div className="preview-container">
                <img src={window.logoURL} className="preview-placeholder"/>
            </div>
            <div className="categories-container">
                <img src={window.logoURL} className="video-placeholder1"/>
                <img src={window.logoURL} className="video-placeholder2"/>
                <img src={window.logoURL} className="video-placeholder3"/>
                <img src={window.logoURL} className="video-placeholder4"/>
                <img src={window.logoURL} className="video-placeholder5"/>
                {/* <img src={window.logoURL} className="video-placeholder"/>
                <img src={window.logoURL} className="video-placeholder"/>
                <img src={window.logoURL} className="video-placeholder"/> */}
            </div>
                {/* <button className="session-end" onClick={logout}>Logout</button> */}
            <Footer />
        </div>
    )
}

export default Home;
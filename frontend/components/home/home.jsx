import React from "react"
import Header from "../ui_blocks/header"
import Footer from "../ui_blocks/footer"

const Home = ({ logout }) => {
    return (
        <div>
            <Header />
            <button className="session-end" onClick={logout}>Logout</button>
            <Footer />
        </div>
    )
}

export default Home;
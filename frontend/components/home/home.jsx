import React from "react"

const Home = ({ logout }) => {
    return (
        <div>
            <button className="session-end" onClick={logout}>Logout</button>
        </div>
    )
}

export default Home;
import React from "react";
import Footer from "../ui_blocks/footer";
import { Link } from "react-router-dom";

class Watchlist extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        console.log("this.props", this.props)        
        return (
            <div className="watchlist-container">
                <div className="watchlist-content">
                    <div className="watchlist-empty">
                        <h5>Your watchlist is empty</h5>
                        <span>Content you add to your watchlist will appear here.</span>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Watchlist;
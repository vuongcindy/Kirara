import React from "react";

class Watchlist extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log("this.props", this.props)
        return (
            <div className="watchlist-container">
                watchlist div
            </div>
        )
    }
}

export default Watchlist;
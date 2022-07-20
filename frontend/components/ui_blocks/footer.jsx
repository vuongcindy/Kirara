import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <h1>
                    <ul>
                        <li>LinkedIn</li>
                        <li>AngelList</li>
                        <li>GitHub</li>
                        <li>Personal Website</li>
                        <li>Another Link</li>
                    </ul>
                    <p className="copyright">
                        &copy; Kirara. All Rights Reserved
                    </p>
                </h1>
            </div>
        )
    }
}

export default Footer;
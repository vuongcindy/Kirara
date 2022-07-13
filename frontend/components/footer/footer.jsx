import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <h1>
                    <ul id="row1">
                        <li>Privacy Policy</li>
                        <li>Subscriber Agreement</li>
                        <li>Your California Privacy Rights</li>
                        <li>Do Not Sell My Personal Information</li>
                        <li>Children's Online Privacy Policy</li>
                    </ul>
                    <ul id="row2">
                        <li>Help</li>
                        <li>Closed Captioning</li>
                        <li>Gift Kirara</li>
                        <li>About Us</li>
                        <li>Kirara Partner Program</li>
                        <li>Interest-based Ads</li>
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
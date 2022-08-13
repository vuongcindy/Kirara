import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <ul>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/vuongcindy/">LinkedIn</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://angel.co/u/cindy-vuong-3">AngelList</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/vuongcindy">GitHub</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://vuongcindy.github.io/">Portfolio</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://mern-stack-paint.herokuapp.com/#/">M(ern)S(tack)Paint</a>
                    </li>
                </ul>
                <br />
                <p className="copyright">
                    &copy; Kirara. All Rights Reserved
                </p>
            </div>
        )
    }
}

export default Footer;
import {footerLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p className="font-bold">Recreated Apple experience for GSAP animations and Three.js practice • <span className="text-indigo">by Shreyansh</span></p>
                <img src="/logo.svg" alt ="Apple logo"/>
            </div>

            <hr />

            <div className="links">
                <p>Copyright © 2024 Apple Inc. All rights reserved.</p>

                <ul>
                    {footerLinks.map(({label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer
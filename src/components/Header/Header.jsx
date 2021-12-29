import react from "react";
import Headroom from "react-headroom";
import "./Header.scss"
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch"

const Header=()=>{
    return (
        <Headroom>
            <header className="header">
                <a href="/" className="logo">
                    <span>&lt;</span>
                    <span className="logoHeading">Jaish Chimnani</span>
                    <span>/&gt;</span>
                </a>
                <ul>
                    <li className="nav-item"><a href="/">Skills</a></li>
                    <li className="nav-item"><a href="/">About Me</a></li>
                    <li className="nav-item"><a href="/">Experiences</a></li>
                    <li className="nav-item"><a href="/">Blogs</a></li>
                    <li className="nav-item"><a href="/">Projects</a></li>
                    <li className="nav-item"><a href="/">Contact Me</a></li>
                    
                <ToggleSwitch />
                </ul>
            </header>
        </Headroom>
    );
}

export default Header;
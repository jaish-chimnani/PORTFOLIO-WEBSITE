import react from "react";
import Headroom from "react-headroom";
import "./Header.scss"
import my from "../../asset/My-pic.jpg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch"

const Header=()=>{
    return (
        <Headroom>
            <header className="header">
            <img  className="profile-img" alt="Man working" src={my}></img>
                <a href="/" className="logo">
                    <span>&lt;</span>
                    <span className="logoHeading">Jaish Chimnani</span>
                    <span>/&gt;</span>
                </a>
                <ul className="navbar">
                    <li className="nav-item"><a href="#
                    skills">Skills</a></li>
                    <li className="nav-item"><a href="/">About Me</a></li>
                    <li className="nav-item"><a href="/">Experiences</a></li>
                    {/* <li className="nav-item"><a href="/blogs">Blogs</a></li> */}
                    <li className="nav-item"><a href="#projects">Projects</a></li>
                    <li className="nav-item"><a href="#contact">Contact Me</a></li>
                    
                {/* <ToggleSwitch /> */}
                </ul>
            </header>
        </Headroom>
    );
}

export default Header;
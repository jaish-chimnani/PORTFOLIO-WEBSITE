import react from "react";
import { greeting } from "../../Portfolio";
import {Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../SocialMedia/SocialMedia";
import Button from "../button/Button"
import AnimatedGif from "../AnimatedGif/AnimatedGif";
const Greeting=()=>{

    return (
        <Fade bottom duration={1000} distance="50px">
        <div className="main-container">
            <div className="greeting-container">
                <div>
                    <div>
                        <h1 className="header-text">{greeting.title}<span className="wave-emoji">{emoji("👋🏻")}</span></h1>
                        <pre className="heading-text">{greeting.subtitle}</pre>
                        <SocialMedia/>
                        <div className="button-greeting-div">
                        <a className="Contact-btn main-btn" href="#Contact">Contact me</a>
                        <a className="resumeLink-btn main-btn" href={greeting.resumeLink}>See My Resume</a>
                        </div>
                    </div>
                </div>
                <div className="greeting-img-div">
                <AnimatedGif/>
                </div>
            </div>
        </div>
        </Fade>
    );
}
export default Greeting;
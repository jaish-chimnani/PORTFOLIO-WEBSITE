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
        <div className="main-container ">
            <div className="greeting-container">
                <div>
                    <div className="black_text"> 
                        <h1 className="header-text black_text">{greeting.title}<span className="wave-emoji black_text">{emoji("👋🏻")}</span></h1>
                        <pre className="heading-text black_text">{greeting.subtitle}</pre>
                        <SocialMedia/>
                        <div className="button-greeting-div">
                        <a className="Contact-btn main-btn black_text" href="#Contact">Contact me</a>
                        <a className="resumeLink-btn main-btn black_text" href={greeting.resumeLink}>See My Resume</a>
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
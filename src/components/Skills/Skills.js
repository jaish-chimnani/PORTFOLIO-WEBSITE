import react from "react";
import { Fade } from "react-reveal";
import "./Skills.scss"
import SoftwareSkills from "../SoftwareSkills/SoftwareSkills";
import {skills} from "../../Portfolio"

const Skills=()=>{
    return (
        <div className="main">
        <div className="skills-container">
        <Fade left duration={1000} distance={"40px"}>
        <div className="skill-img-container">
        <img src=""></img>
        </div>
        </Fade>
        <Fade right duration={1000} distance={"40px"}>
        <div className="skills-text-div">
            <h1 className="heading blur-heading">{skills.title}</h1>
            <p className="subtitle skills-text-subtitle">{skills.subtitle}</p>
            <SoftwareSkills/>
            <div>
                {skills.skills.map((skills)=>{
                    return (
                        <p className="subtitle skills-text">{skills}</p>
                    )
                })}
            </div>
        </div>
        </Fade>
        </div>
        </div>
    )
}

export default Skills;
import react from "react";
import { skills } from "../../Portfolio";
import "./SoftwareSkills.scss"

const SoftwareSkills=()=>{
    return (
        <div>
            <div className="skills-container-main-div">
                <ul className="icons-container">
                    {skills.softwareSkills.map((skills,i)=>{
                        return (
                            <li className="software-skill-inline" key={i} name={skills.skillName}>
                            <i className={skills.fontAwesomeClassname}></i>
                            <p className="black_text">{skills.skillName}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SoftwareSkills
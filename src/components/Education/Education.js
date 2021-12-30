import react from "react";
import "./Education.scss";
import {educationInfo} from "../../Portfolio";
import EducationCard from "../EducationCard/EducationCard";

const Education=()=>{
    return (
        <div className="education-section">
        <h1 className="education-heading blur-heading">Education</h1>
        <div className="education-card">
        
        {educationInfo.schools.map((school,i)=>(
            <EducationCard key={i} school={school}/>
    
        ))}
            {/* <h1>5</h1> */}
        </div>
        </div>
    )
}

export default Education;
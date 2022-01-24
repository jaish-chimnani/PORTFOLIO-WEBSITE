import react from "react";
import "./EducationCard.scss"
import { Fade, Slide } from "react-reveal";

const EducationCard = ({school}) => {


    const GetDesc = ({desc}) => {
        return (
            <div>
                {desc.map((item, i) => (
                    <li className="black_text subtitle" key={i}>{item}</li>
                ))}
            </div>

        )
    }


    return (
        <div>
            <Fade left duration={1000}>
                <div className="education-Card">
                    <div className="edu-card-left">
                        <img crossOrigin="annymous" className="education-rounded-img" src={school.logo} alt={school.schoolName}>
                        </img>
                        <div className="edu-card-right">
                            <div className="school-name">
                                <h5 className="black_text school">{school.schoolName}</h5>
                                <div className="school-details">
                                    <h5 className="black_text school-subheader">
                                        {school.subtitle}
                                    </h5>
                                    <p className="black_text school-duration">
                                        {school.duration}
                                    </p>
                                    <div className="desc-points">
                                        <ul>
                                            <GetDesc desc={school.subdes} />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
           
            <Slide left duration={2000}>
                <div className="edu-card-border">

                </div>
            </Slide>
        </div>
    )
}

export default EducationCard;
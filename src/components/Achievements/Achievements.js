import { Fade } from "react-reveal";
import { achievementSection } from "../../Portfolio";
import AchievementCard from "../AchievementCard/AchievementCard"
import "./Achievements.scss";
const Achievements =()=>{
    return (
        <Fade bottom duration={1000} distance={"30px"}>

        <div className="main" id="Achievements">
        <div className="achievements-main-div">
<div className="achievement-header">
<h1 className="achievement-heading blur-heading">
    {achievementSection.title}
</h1>
<p className="subtitle achievement-subtitle">{achievementSection.subtitle}</p>
</div>
<div className="achievements-card-div">
{achievementSection.certificates.map((certificate)=>(
<div>
<AchievementCard 
    title={certificate.title}
    subtitle={certificate.subtitle}
    image={certificate.image}
    footerLink={certificate.footerLink}
/>
</div>
))}
</div>
        </div>
        </div>
        </Fade>
    )
}

export default Achievements;
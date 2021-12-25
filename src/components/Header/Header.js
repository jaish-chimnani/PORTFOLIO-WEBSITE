import react from 'react';
import Headroom from "react-headroom";
import './Header.scss';
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../Contexts/StyleContext";
import {greeting,
    workExperiences,
    openSource,
    skillsSection,
    achievementSection,
    blogSection,
    talkSection
} from "../../Portfolio"


const Header=()=>{
    const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

    return (
        <Headroom>
        <div>


        <header className='header'>
            <a href='/' className='logo'>
                <span>&lt;</span>
                <span className="logoHeading">{greeting.name}</span>
                <span>/&gt;</span>
            </a>
            <input className='menu-btn' type="checkbox" id='menu-btn' />
            <label className='menu-icon' htmlFor='menu-btn'
            style={{color:white}}
            >
            <span className='navicon'></span>
            </label>
            <ul className='menu'>
            {viewSkills && (<li><a href="#Skills">Skills</a></li>)}
            {viewExperience && (<li><a href="#Experience">Experience</a></li>)}
            {viewAchievement && (<li><a href="#Achievements">Achievement</a></li>)}
            {ViewBlogs && (<li><a href="#Blogs">Blogs</a></li>)}
            { (<li><a href="#Contact">Contact Me</a></li>)}
            
        <a>

        <ToggleSwitch/>
        </a>
            
            </ul>
        </header>
        </div>
        </Headroom>
    );
}
export default Header;
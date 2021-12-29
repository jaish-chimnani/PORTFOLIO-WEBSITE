import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialMediaLinks } from "../../Portfolio";
import {faFire} from "@fortawesome/free-solid-svg-icons";
import "./SocialMedia.scss"

const SocialMedia=()=>{

    return (
        <div className="social-media-div">
<a className="icon-button" href={SocialMediaLinks.github}><i className="github fab fa-github"></i></a>
<a className="icon-button" href={SocialMediaLinks.linkedin}><i className="fab fa-linkedin linkedin"></i></a>
<a className="icon-button" href={SocialMediaLinks.gmail}><i className="fas fa-envelope gmail"></i></a>
<a className="icon-button" href={SocialMediaLinks.facebook}><i className="fab fa-facebook facebook"></i></a>
        </div>
    )
}

export default SocialMedia;

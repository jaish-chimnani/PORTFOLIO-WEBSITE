import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../SocialMedia/SocialMedia";
import { contactInfo} from "../../Portfolio";
import {Fade} from "react-reveal";

// import email from "../../assets/lottie/email";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
// import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
//   const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className= "subTitle contact-subtitle"
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <div className="icon-badges">

              {/* <img className="profile-img" alt="Man working" src={my}></img> */}
              <SocialMedia />
              
              </div>
            </div>
          </div>
        </div>
          <div className="contact-image-div">
              {/* <img className="profile-img" alt="Man working" src={my}></img> */}
    
            
          </div>
      </div>
    </Fade>
  );
}

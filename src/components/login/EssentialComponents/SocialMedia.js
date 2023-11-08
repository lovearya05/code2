import React from "react";
import "./SocialMedia.css";
import Google from "./Images/Google/google_300221.png";
import Linkedin from "./Images/Linkedin/linkedin_3536505.png";
import Facebook from "./Images/Facebook/facebook_5968764.png";

const SocialMedia = () => {
  return (
    <div className="socialMedia">
      <img src={Google} alt="google" />
      <img src={Linkedin} alt="linkedin" />
      <img src={Facebook} alt="facebook" />
    </div>
  );
};

export default SocialMedia;

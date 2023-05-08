import React from "react";
import "./Footer.css";
import Facebook from "../../icons/facebook.png";
import Instagram from "../../icons/instagram.png";
import Linkedin from "../../icons/linkedin.png";

const Footer = () => {
  return (
    <div className="footer-social">
      <img
        src={Facebook}
        alt="Facebook-logo"
        className="footer-social__link"
      ></img>
      <img
        src={Instagram}
        alt="Instagram-logo"
        className="footer-social__link"
      ></img>
      <img
        src={Linkedin}
        alt="Linkedin-logo"
        className="footer-social__link"
      ></img>
    </div>
  );
};

export default Footer;

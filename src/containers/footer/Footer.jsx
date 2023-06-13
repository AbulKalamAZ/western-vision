import React from "react";
import logo from "../../assets/logo-white.png";
import "./footer.css";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-content">
        <div className="gpt3__footer-content-item">
          <img src={logo} alt="gpt3 logo" />
          <p>Umluj, Tabuk, Kingdom of Saudi Arabia</p>
        </div>
        <div className="gpt3__footer-content-item">
          <div className="gpt3__footer-link-title">Links</div>
          <a href="/">Services</a>
          <a href="/">Company Profile</a>
          <a href="/">Counters</a>
          <a href="/">Contact</a>
        </div>
        <div className="gpt3__footer-content-item">
          <div className="gpt3__footer-link-title">Company</div>
          <a href="/">Terms & Conditions</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Legal</a>
          <a href="/">Support</a>
        </div>
        <div className="gpt3__footer-content-item">
          <div className="gpt3__footer-link-title">Get in touch</div>
          <p>Umluj, Tabuk, Kingdom of Saudi Arabia</p>
          <p>+966 596 470 657</p>
          <p>sales@western-vision.com</p>
        </div>
      </div>
      <div className="gpt3__footer-bottom">
        <p>© {currentYear} Western Visions. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

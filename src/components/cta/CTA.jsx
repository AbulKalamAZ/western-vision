import React from "react";
import "./cta.css";

const CTA = ({ openModal }) => {
  return (
    <div className="gpt3__cta section__margin" id="contact">
      <div className="gpt3__cta-content">
        <p>We're always available answer any question you might have</p>
        <h2>
          We are excited to hear from you and will respond to your inquiry asap
        </h2>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button" onClick={openModal}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CTA;

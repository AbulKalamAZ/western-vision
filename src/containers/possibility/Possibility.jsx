import React from "react";
import construction from "../../assets/construction.svg";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="profile">
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">
          Learn more about the value we can bring to your business
        </h1>
        <p>
          To download our company profile, simply click the button below. If you
          have any further questions or would like to discuss potential
          collaborations, please do not hesitate to reach out to us. We look
          forward to the opportunity to work with you
        </p>

        <button type="button">Company Profile</button>
      </div>

      <div className="gpt3__possibility-image">
        <img src={construction} alt="construction site" />
      </div>
    </div>
  );
};

export default Possibility;

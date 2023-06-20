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

        <a
          className="download-btn"
          href="https://download1478.mediafire.com/0i2p38fjaiogJnFqviFCTJQYuQSPl98ZENzDdlIsPu4xT-NsZ0WTmrz8S9BiciwJ07tMNcwk92KaHST2BjS5ej_VjiOimzMXiSon9hEYtZTZa34ZODNnR8VJwXNYUZX9QZS2oxbLtD08E4VzI4f7zlv8KC4kzuzPx8Y3m6WcKdhduyrn/7k8x4dpkh1ddfg7/Western+Vision+Company+Profile+%281%29.pdf"
          download="download"
        >
          Download Company Profile
        </a>
      </div>

      <div className="gpt3__possibility-image">
        <img src={construction} alt="construction site" />
      </div>
    </div>
  );
};

export default Possibility;

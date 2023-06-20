import React from "react";

import constructionSite from "../../assets/construction-site-video.mp4";
import { Navbar } from "../../components";
import "./header.css";

const Header = ({ openModal }) => {
  return (
    <div className="wv__header" id="home">
      <div className="wv__header-video-container">
        <video autoPlay muted loop className="wv__header-video">
          <source src={constructionSite} type="video/mp4" />
        </video>
      </div>
      <Navbar />
      <div className="wv__header-content section__padding">
        <h1 className="">
          We Are <br />
          <span>Western Vision</span>
        </h1>
        <p>
          Whether you need a workforce for a construction project, a team of
          expert workers, or administrative staff, or equipments, we have the
          resources and expertise to deliver exceptional results. With our
          extensive database of qualified workers, we make it easy for
          businesses to find the perfect fit for their unique needs
        </p>

        <div className="wv__header-content__input">
          <button type="button" onClick={openModal}>
            Request for a quotation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

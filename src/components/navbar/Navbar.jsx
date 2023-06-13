import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#whatwv">Who We Are</a>
      </p>
      <p>
        <a href="#services">Our Services</a>
      </p>
      <p>
        <a href="#profile">Company Profile</a>
      </p>
      <p>
        <a href="#contact">Contact Us</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="wv__navbar">
      <div className="wv__navbar-links">
        <div className="wv__navbar-links_logo">
          <img src={logo} alt="wv-logo" />
        </div>
        <div className="wv__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="wv__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="wv__navbar-menu_container scale-up-center">
            <div className="wv__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

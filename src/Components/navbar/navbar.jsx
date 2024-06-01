import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

import Logo from "../../assets/logos/Logo 1024x822 removebg.png";

import { ReactComponent as NavBarsIcon } from "../../assets/icons/bars-solid.svg";
import { ReactComponent as NavXMarkIcon } from "../../assets/icons/xmark-solid.svg";

import NavbarModal from "../navbarModal/navbarModal.jsx";

function Navbar() {
  let [displayed, setDisplayed] = useState(false);

  let [scrolled, setScrolled] = useState(false);

  const navToggleHandler = () => {
    setDisplayed(!displayed);
  };

  const navModalLinkHandler = (setDisplayed) => {
    setDisplayed(false);
  };

  useEffect(() => {
    let height = document.getElementById("nav-wrapper").offsetHeight;
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY >= height);
    });
  }, []);

  return (
    <div id="nav-wrapper" className={`${scrolled ? `scrolled` : ``}`}>
      <div className="nav-logo-wrapper">
        <img src={Logo} alt="" id="nav-logo" />
      </div>
      <div className="nav-icon-wrapper" onClick={navToggleHandler}>
        <p className="nav-icon-text">menu</p>
        {displayed ? (
          <NavXMarkIcon className="nav-icon" />
        ) : (
          <NavBarsIcon className="nav-icon" />
        )}
      </div>
      <ul id="nav-links-wrapper">
        <li className="nav-single-link">
          <Link to="/">home</Link>
        </li>
        <li className="nav-single-link">
          <Link to="/products">products</Link>
        </li>
        <li className="nav-single-link">
          <Link to="/gallery">gallery</Link>
        </li>
        <li className="nav-single-link">
          <Link to="/about-us">about us</Link>
        </li>
        <li className="nav-single-link">
          <Link to="/contact">contact</Link>
        </li>
      </ul>
      <NavbarModal
        displayed={displayed}
        handler={() => navModalLinkHandler(setDisplayed)}
      />
    </div>
  );
}

export default Navbar;

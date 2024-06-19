import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./navbar.css";

import Logo from "../../assets/logos/Ajwa Logo Light removebg.png";

import { ReactComponent as NavBarsIcon } from "../../assets/icons/bars-solid.svg";
import { ReactComponent as NavXMarkIcon } from "../../assets/icons/xmark-solid.svg";

import NavbarModal from "../navbarModal/navbarModal.jsx";

function Navbar() {
  let [displayed, setDisplayed] = useState(false);

  let [scrolled, setScrolled] = useState(false);

  const isHome = useLocation().pathname === "/" ? true : false;

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
    <div
      id="nav-wrapper"
      className={`${scrolled || !isHome ? `scrolled` : ``}`}
    >
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
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            home
          </NavLink>
        </li>
        <li className="nav-single-link">
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            products
          </NavLink>
        </li>
        <li className="nav-single-link">
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            gallery
          </NavLink>
        </li>
        <li className="nav-single-link">
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            about us
          </NavLink>
        </li>
        <li className="nav-single-link">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            contact
          </NavLink>
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

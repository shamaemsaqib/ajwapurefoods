import React, { useState } from "react";

import "./navbar.css";

import Logo from "../../assets/logos/Logo 1024x822 removebg.png";
import { ReactComponent as NavBarsIcon } from "../../assets/icons/bars-solid.svg";
import { ReactComponent as NavXMarkIcon } from "../../assets/icons/xmark-solid.svg";

import NavbarModal from "../navbarModal/navbarModal.jsx";

function Navbar() {
  let [displayed, setDisplayed] = useState(false);
  const navToggleHandler = () => {
    setDisplayed(!displayed);
  };

  return (
    <div className="nav-wrapper">
      <div className="nav-logo-wrapper">
        <img src={Logo} alt="" id="nav-logo" />
      </div>
      <div className="nav-icon-wrapper">
        <p className="nav-icon-text">menu</p>
        {displayed ? (
          <NavXMarkIcon className="nav-icon" onClick={navToggleHandler} />
        ) : (
          <NavBarsIcon className="nav-icon" onClick={navToggleHandler} />
        )}
      </div>
      <NavbarModal displayed={displayed} />
    </div>
  );
}

export default Navbar;

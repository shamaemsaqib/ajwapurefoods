import React from "react";

import "./header.css";

import Navbar from "../navbar/navbar";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header">
        <Navbar />
        <div className="banner-wrapper">
          <h2 className="banner-title">
            Welcome to <br />{" "}
            <span id="banner-title-name">Ajwa Pure Foods</span>
          </h2>
          <h4 className="banner-text">
            <span id="banner-text-name">Ajwa Pure Foods</span> Industries
            serving the world since 1989. Winning the faith of our valued
            customers is the main aim of this company. Providing clients with
            optimum quality Agro based products like world top class Basmati
            aromatic Rice, finest quality natural Himalayan Pink Salt & 100%
            pure & natural spices.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Header;

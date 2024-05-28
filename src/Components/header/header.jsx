import React from "react";

import "./header.css";

import Navbar from "../navbar/navbar";
import CustomTransparentButton from "../customTransparentButton/customTransparentButton";

import ArrowRightIconLight from "../../assets/icons/arrow-right-solid-light.svg";

function Header() {
  return (
    <div id="header-wrapper">
      <div id="header">
        <Navbar />
        <div id="banner-wrapper">
          <h2 id="banner-title">
            Welcome to <br />{" "}
            <span id="banner-title-name">Ajwa Pure Foods</span>
          </h2>
          <h4 id="banner-text">
            <span id="banner-text-name">Ajwa Pure Foods</span> Industries
            serving the world since 1989. Winning the faith of our valued
            customers is the main aim of this company. Providing clients with
            optimum quality Agro based products like world top class Basmati
            aromatic Rice, finest quality natural Himalayan Pink Salt & 100%
            pure & natural spices.
          </h4>
          <div id="banner-btn-grp">
            <CustomTransparentButton
              link={"/about-us"}
              text={"about us"}
              icon={ArrowRightIconLight}
            />
            <CustomTransparentButton
              link={"/contact"}
              text={"contact us"}
              icon={ArrowRightIconLight}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

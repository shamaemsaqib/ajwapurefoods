import React from "react";

import "./header.css";

import ArrowRightIconLight from "../../assets/icons/arrow-right-solid-light.svg";

import CustomTransparentButton from "../customTransparentButton/customTransparentButton";

function Header() {
  return (
    <div id="bg-wrapper">
      <div id="bg">
        <div id="header-wrapper">
          <div id="header-txt-grp">
            <h2 id="header-title">
              Welcome to <br />{" "}
              <span id="header-title-name">Ajwa Pure Foods</span>
            </h2>
            <h4 id="header-text">
              <span id="header-text-name">Ajwa Pure Foods</span> Industries
              serving the world since 1989. Winning the faith of our valued
              customers is the main aim of this company. Providing clients with
              optimum quality Agro based products like world top class Basmati
              aromatic Rice, finest quality natural Himalayan Pink Salt & 100%
              pure & natural spices.
            </h4>
          </div>
          <div id="header-btn-grp">
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

import React from "react";

import "./brands.css";

import Brand1 from "../../assets/brands/Brand 1.jpg";
import Brand2 from "../../assets/brands/Brand 2.jpg";
import Brand3 from "../../assets/brands/Brand 3.jpg";

import SectionTitle from "../sectionTitle/sectionTitle";

function Brands() {
  return (
    <div id="brands-section-wrapper">
      <SectionTitle text={"our brands"} idName="brands-section-title" />
      <div id="brands-images-wrapper">
        <img src={Brand1} alt="Brand" className="brands-single-img" />
        <img src={Brand3} alt="Brand" className="brands-single-img" />
        <img src={Brand2} alt="Brand" className="brands-single-img" />
      </div>
    </div>
  );
}

export default Brands;

import React from "react";

import "./homeSingleProductCategory.css";

function HomeSingleProductCategory({ category }) {
  return (
    <div className="single-category-wrapper">
      <h1 className="single-category-title">{category.name}</h1>
      <img src={category.img} alt="" className="single-category-img" />
      <p className="single-category-desc">{category.desc}</p>
    </div>
  );
}

export default HomeSingleProductCategory;

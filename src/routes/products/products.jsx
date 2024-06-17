import React from "react";

import "./products.css";
import { products } from "../../utils/data.js";

import FilterIcn from "../../assets/icons/filter-solid.svg";

import BoldLightTitle from "../../Components/boldLightTitle/boldLightTitle.jsx";
import SingleProductCard from "../../Components/singleProductCard/singleProductCard.jsx";

function Products() {
  console.log(products);
  return (
    <section id="products-section-wrapper">
      <div id="products-section">
        <BoldLightTitle
          first={"discover our"}
          middle={"diverse collection"}
          bold={2}
          idName={"products-section-title"}
        />
        <input
          type="text"
          id="products-section-searchbar"
          placeholder="search a product"
        />
        <div id="products-display-subsection-wrapper">
          <div id="products-display-subsection-filter-wrapper">
            <h4 id="products-display-subsection-filter-title">
              <img src={FilterIcn} alt="" /> filter
            </h4>
            <div className="products-display-subsection-filter-single-section">
              <h4 className="products-display-subsection-filter-single-section-title">
                category
              </h4>
              <ul className="products-display-subsection-filter-single-section-list">
                <li>all</li>
                <li>rice</li>
                <li id="active">pink salt</li>
                <li>spices</li>
              </ul>
            </div>
          </div>
          <div id="products-display-subsection-products-wrapper">
            <h4 id="products-display-subsection-products-count">
              1 products found <hr />
            </h4>
            <div id="products-display-subsection-product-cards-wrapper">
              {products.map((product) => (
                <SingleProductCard product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;

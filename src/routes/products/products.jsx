import React, { useState } from "react";

import "./products.css";
import allProductsArr, {
  riceProducts,
  saltProducts,
  spiceProducts,
} from "../../utils/data.js";

import LayerIcn from "../../assets/icons/layer-group-solid.svg";

import BoldLightTitle from "../../Components/boldLightTitle/boldLightTitle.jsx";
import SingleProductCard from "../../Components/singleProductCard/singleProductCard.jsx";

function Products() {
  const [currProducts, setCurrProducts] = useState(allProductsArr);
  const [, setCurrSearchText] = useState("");
  const [currCategory, setCurrCategory] = useState(0);

  const filterCategoryClickHandler = (event) => {
    const selectedCategory = event.target.innerText.toLowerCase();
    switch (selectedCategory) {
      case "all":
        setCurrProducts(allProductsArr);
        setCurrCategory(0);
        break;
      case "rice":
        setCurrProducts(riceProducts);
        setCurrCategory(1);
        break;
      case "pink salt":
        setCurrProducts(saltProducts);
        setCurrCategory(2);
        break;
      case "spices":
        setCurrProducts(spiceProducts);
        setCurrCategory(3);
        break;
      default:
        break;
    }
    const screenSize = window.innerWidth;
    window.scrollTo({
      top:
        document.getElementById("products-display-subsection-wrapper")
          .offsetTop -
        (screenSize < 768
          ? window.innerHeight * 0.1
          : screenSize < 1200
          ? window.innerHeight * 0.12
          : window.innerHeight * 0.14),
    });
  };

  const searchChangeHandler = (event) => {
    const currText = event.target.value;
    setCurrSearchText(currText);
    setCurrCategory(0);
    setCurrProducts(
      allProductsArr.filter((product) =>
        product.name.toLowerCase().includes(currText.toLowerCase())
      )
    );
  };

  return (
    <section id="products-section-wrapper">
      <div id="products-section">
        <BoldLightTitle
          first={"discover our"}
          middle={"products"}
          bold={2}
          idName={"products-section-title"}
        />
        <input
          type="text"
          id="products-section-searchbar"
          placeholder="search a product"
          onChange={searchChangeHandler}
        />
        <div id="products-display-subsection-wrapper">
          <div id="products-display-subsection-filter">
            <h4 id="products-display-subsection-filter-title">
              <img src={LayerIcn} alt="" /> category
            </h4>
            <ul id="products-display-subsection-filter-list">
              <li
                onClick={filterCategoryClickHandler}
                id={`${currCategory === 0 ? `active` : ``}`}
              >
                all
              </li>
              <li
                onClick={filterCategoryClickHandler}
                id={`${currCategory === 1 ? `active` : ``}`}
              >
                rice
              </li>
              <li
                onClick={filterCategoryClickHandler}
                id={`${currCategory === 2 ? `active` : ``}`}
              >
                pink salt
              </li>
              <li
                onClick={filterCategoryClickHandler}
                id={`${currCategory === 3 ? `active` : ``}`}
              >
                spices
              </li>
            </ul>
          </div>
          {currProducts.length > 0 ? (
            <div id="products-display-subsection-product-cards-wrapper">
              {currProducts.map((product, index) => (
                <SingleProductCard key={index} product={product} />
              ))}
            </div>
          ) : (
            <h4 id="products-display-subsection-no-products">
              No products matched your search!
            </h4>
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;

import React, { useState } from "react";

import "./products.css";
import allProductsArr, {
  riceProducts,
  saltProducts,
  spiceProducts,
} from "../../utils/data.js";

import FilterIcn from "../../assets/icons/filter-solid.svg";

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
    window.scrollTo({
      top:
        document.getElementById("products-display-subsection-wrapper")
          .offsetTop -
        window.innerHeight * 0.14,
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
          middle={"diverse collection"}
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
          <div id="products-display-subsection-filter-wrapper">
            <div id="products-display-subsection-filter">
              <h4 id="products-display-subsection-filter-title">
                <img src={FilterIcn} alt="" /> filter
              </h4>
              <div className="products-display-subsection-filter-single-section">
                <h4 className="products-display-subsection-filter-single-section-title">
                  category
                </h4>
                <ul className="products-display-subsection-filter-single-section-list">
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
            </div>
          </div>
          <div id="products-display-subsection-products-wrapper">
            {currProducts.length > 0 ? (
              <div>
                <h4 id="products-display-subsection-products-count">
                  <hr />
                  {currProducts.length} products found <hr />
                </h4>
                <div id="products-display-subsection-product-cards-wrapper">
                  {currProducts.map((product) => (
                    <SingleProductCard product={product} />
                  ))}
                </div>
              </div>
            ) : (
              <h4 id="products-display-subsection-no-products">
                No products matched your search!
              </h4>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;

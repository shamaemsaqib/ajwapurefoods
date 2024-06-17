import React from "react";

import "./singleProductCard.css";

function SingleProductCard({ product }) {
  return (
    <div className="single-product-card">
      <div className="product-card-img-wrapper">
        <img src={product.image} alt="" className="product-card-img" />
      </div>
      <p className="product-card-name">{product.name}</p>
    </div>
  );
}

export default SingleProductCard;

import React from "react";

import "./lineOnSidesTitle.css";

function LineOnSidesTitle({ text, idName = "", className = "" }) {
  return (
    <div className="line-on-sides-title-wrapper">
      <h1
        className={`line-on-sides-title ${className ? className : ""}`}
        id={idName ? idName : ""}
      >
        {text}
      </h1>
    </div>
  );
}

export default LineOnSidesTitle;

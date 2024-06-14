import React from "react";

import "./boldLightTitle.css";

function BoldLightTitle({ idName, first, middle, last, bold }) {
  return (
    <h2 className="bold-light-section-title" id={`${idName ? idName : ``}`}>
      <span className={`${bold === 1 ? `bold` : ``}`}>{first}</span>{" "}
      <span className={`${bold === 2 ? `bold` : ``}`}>{middle}</span>{" "}
      {last ? (
        <span className={`${bold === 3 ? `bold` : ``}`}>{last}</span>
      ) : (
        ""
      )}
    </h2>
  );
}

export default BoldLightTitle;

import React from "react";

import "./sectionTitle.css";

function SectionTitle({ text, idName = "", className = "" }) {
  return (
    <div className="section-title-wrapper">
      <h1
        className={`section-title ${className ? className : ""}`}
        id={idName ? idName : ""}
      >
        {text}
      </h1>
    </div>
  );
}

export default SectionTitle;

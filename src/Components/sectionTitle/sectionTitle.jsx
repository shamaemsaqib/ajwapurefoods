import React from "react";

import "./sectionTitle.css";

function SectionTitle({ text, idName = "" }) {
  return (
    <div className="section-title-wrapper">
      <h1 className="section-title" id={idName ? idName : ""}>
        {text}
      </h1>
    </div>
  );
}

export default SectionTitle;

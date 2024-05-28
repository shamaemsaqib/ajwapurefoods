import React from "react";

import "./customTransparentButton.css";

function CustomTransparentButton({ link, icon, newTab = false }) {
  return (
    <a
      href={link}
      target={newTab ? "_blank" : ""}
      rel={newTab ? "noreferrer" : ""}
      className="transparent-btn"
    >
      full certificate
      <img src={icon} alt="" className="transparent-btn-icon" />
    </a>
  );
}

export default CustomTransparentButton;

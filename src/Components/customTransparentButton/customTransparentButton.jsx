import React from "react";

import "./customTransparentButton.css";

function CustomTransparentButton({
  link,
  newTab = false,
  light = false,
  text,
  icon,
}) {
  return (
    <a
      href={link}
      target={newTab ? "_blank" : ""}
      rel={newTab ? "noreferrer" : ""}
      className={`transparent-btn${light ? ` light` : ``}`}
    >
      {text}
      {icon ? <img src={icon} alt="" className="transparent-btn-icon" /> : null}
    </a>
  );
}

export default CustomTransparentButton;

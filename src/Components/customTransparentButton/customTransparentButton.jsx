import React from "react";
import { Link } from "react-router-dom";

import "./customTransparentButton.css";

function CustomTransparentButton({
  external = false,
  link,
  newTab = false,
  light = false,
  text,
  icon,
}) {
  return (
    <Link
      to={external ? { pathname: link } : link}
      target={newTab ? "_blank" : ""}
      rel={newTab ? "noreferrer" : ""}
      className={`transparent-btn${light ? ` light` : ``}`}
    >
      {text}
      {icon ? <img src={icon} alt="" className="transparent-btn-icon" /> : null}
    </Link>
  );
}

export default CustomTransparentButton;

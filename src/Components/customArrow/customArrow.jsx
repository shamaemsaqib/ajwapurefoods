import React from "react";

import "./customArrow.css";

function CustomArrow({
  dark = false,
  next = false,
  className,
  style,
  onClick,
}) {
  return (
    <button
      className={`arrowIcon ${className} ${dark ? `dark` : ``}`}
      style={{ ...style }}
      onClick={onClick}
    >
      {next ? <span>&#10095;</span> : <span>&#10094;</span>}
    </button>
  );
}

export default CustomArrow;

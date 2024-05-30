import React from "react";

import "./navbarModal.css";

function NavbarModal({ displayed }) {
  return (
    <div
      className={`nav-modal-wrapper${displayed ? " nav-modal-display" : ""}`}
    >
      <div className="nav-modal">
        <ul className="nav-modal-list">
          <li className="nav-modal-link">
            <a href="/">home</a>
          </li>
          <li className="nav-modal-link">
            <a href="/products">products</a>
          </li>
          <li className="nav-modal-link">
            <a href="/gallery">gallery</a>
          </li>
          <li className="nav-modal-link">
            <a href="/about-us">about us</a>
          </li>
          <li className="nav-modal-link">
            <a href="contact">contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarModal;

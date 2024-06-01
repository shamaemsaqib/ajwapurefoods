import React from "react";
import { Link } from "react-router-dom";

import "./navbarModal.css";

function NavbarModal({ displayed, handler }) {
  return (
    <div
      className={`nav-modal-wrapper${displayed ? " nav-modal-display" : ""}`}
    >
      <div className="nav-modal">
        <ul className="nav-modal-list">
          <li className="nav-modal-link" onClick={handler}>
            <Link to="/">home</Link>
          </li>
          <li className="nav-modal-link" onClick={handler}>
            <Link to="/products">products</Link>
          </li>
          <li className="nav-modal-link" onClick={handler}>
            <Link to="/gallery">gallery</Link>
          </li>
          <li className="nav-modal-link" onClick={handler}>
            <Link to="/about-us">about us</Link>
          </li>
          <li className="nav-modal-link" onClick={handler}>
            <Link to="contact">contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarModal;

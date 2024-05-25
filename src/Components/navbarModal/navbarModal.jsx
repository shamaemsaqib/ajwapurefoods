import React from "react";

import "./navbarModal.css";

function NavbarModal({ displayed }) {
  return (
    <div
      className={`nav-modal-wrapper${displayed ? " nav-modal-display" : ""}`}
    >
      <div className="nav-modal">
        <ul className="nav-modal-list">
          <li className="nav-modal-link">home</li>
          <li className="nav-modal-link">our products</li>
          <li className="nav-modal-link">brands</li>
          <li className="nav-modal-link">national</li>
          <li className="nav-modal-link">international</li>
          <li className="nav-modal-link">technology</li>
          <li className="nav-modal-link">about us</li>
          <li className="nav-modal-link">contact</li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarModal;

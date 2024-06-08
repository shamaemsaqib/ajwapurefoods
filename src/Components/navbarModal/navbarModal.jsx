import React from "react";
import { NavLink } from "react-router-dom";

import "./navbarModal.css";

function NavbarModal({ displayed, handler }) {
  return (
    <div
      className={`nav-modal-wrapper${displayed ? " nav-modal-display" : ""}`}
    >
      <div className="nav-modal">
        <ul className="nav-modal-list">
          <li className="nav-modal-link" onClick={handler}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              home
            </NavLink>
          </li>
          <li className="nav-modal-link" onClick={handler}>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              products
            </NavLink>
          </li>
          <li className="nav-modal-link" onClick={handler}>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              gallery
            </NavLink>
          </li>
          <li className="nav-modal-link" onClick={handler}>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              about us
            </NavLink>
          </li>
          <li className="nav-modal-link" onClick={handler}>
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarModal;

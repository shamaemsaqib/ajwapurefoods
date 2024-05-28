import React from "react";

import "./footer.css";

import Logo from "../../assets/logos/Logo 1024x822 removebg.png";

function Footer() {
  return (
    <div id="footer-section-wrapper">
      <div id="footer-section">
        <div id="footer-links-section">
          <div
            id="footer-links-address-wrapper"
            className="footer-links-subsection-wrapper"
          >
            <p
              id="footer-address-heading"
              className="footer-links-subsection-heading"
            >
              where to find us
            </p>
            <p id="footer-address" className="footer-links-subsection-link">
              5-Km Main G.T. Road <br /> Muridke, Punjab <br /> Pakistan
            </p>
          </div>
          <div
            id="footer-links-contacts-wrapper"
            className="footer-links-subsection-wrapper"
          >
            <p
              id="footer-contacts-heading"
              className="footer-links-subsection-heading"
            >
              get in touch with us
            </p>
            <ul
              id="footer-links-contacts"
              className="footer-links-subsection-list"
            >
              <li className="footer-links-subsection-link">
                <a href="mailto:info@royalsalvafoods.com">
                  info@royalsalvafoods.com
                </a>
              </li>
              <li className="footer-links-subsection-link">
                <a href="tel:+923236273747">+92 323 6273747</a>
              </li>
              <li className="footer-links-subsection-link">
                <a href="tel:+923015348888">+92 301 5348888</a>
              </li>
            </ul>
          </div>
          <div
            id="footer-links-social-wrapper"
            className="footer-links-subsection-wrapper"
          >
            <p
              id="footer-social-heading"
              className="footer-links-subsection-heading"
            >
              follow us
            </p>
            <ul
              id="footer-links-social"
              className="footer-links-subsection-list"
            >
              <li className="footer-links-subsection-link">Facebook</li>
              <li className="footer-links-subsection-link">Instagram</li>
              <li className="footer-links-subsection-link">LinkedIn</li>
            </ul>
          </div>
        </div>
        <div id="footer-logo-section">
          <img src={Logo} alt="" id="footer-logo" />
          <p id="footer-copyrights">
            {new Date().getFullYear()}{" "}
            <span id="footer-copyrights-company">Ajwa&#174; Pure Foods</span> -
            All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

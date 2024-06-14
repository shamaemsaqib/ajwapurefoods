import React from "react";

import "./contact.css";

import BoldLightTitle from "../../Components/boldLightTitle/boldLightTitle";

function Contact() {
  return (
    <section id="contact-section-wrapper">
      <div id="contact-section">
        <div id="contact-links-subsection-wrapper">
          <BoldLightTitle first={"connect"} middle={"with us"} bold={1} />
          <div id="contact-links-wrapper">
            <div className="contact-links-subsection-wrapper">
              <p className="contact-links-subsection-heading">say hi!</p>
              <a
                href="mailto:info@royalsalvafoods.com"
                className="contact-links-subsection-link"
              >
                info@royalsalvafoods.com
              </a>
            </div>
            <div className="contact-links-subsection-wrapper">
              <p className="contact-links-subsection-heading">
                get in touch with us
              </p>
              <ul className="contact-links-subsection-list">
                <li className="contact-links-subsection-link">
                  <a href="tel:+923236273747">+92 323 6273747</a>
                </li>
                <li className="contact-links-subsection-link">
                  <a href="tel:+923015348888">+92 301 5348888</a>
                </li>
              </ul>
            </div>
            <div className="contact-links-subsection-wrapper">
              <p className="contact-links-subsection-heading">follow us</p>
              <ul className="contact-links-subsection-list">
                <li className="contact-links-subsection-link">Facebook</li>
                <li className="contact-links-subsection-link">Instagram</li>
                <li className="contact-links-subsection-link">LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="contact-address-subsection-wrapper">
          <BoldLightTitle first={"meet"} middle={" us"} bold={1} />
          <p id="contact-address">
            5-Km Main G.T. Road <br /> Muridke, Punjab <br /> Pakistan
          </p>
          <div id="google-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.9620001326603!2d74.14237217466567!3d32.17829941434402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2988dddde1e9%3A0xaa7f33c6029b945c!2sSalva%20foods%20gujranwala%20pakistan!5e0!3m2!1sen!2s!4v1717885714511!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              title="Ajwa Pure Foods"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

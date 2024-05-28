import React from "react";

import "./singleCertificate.jsx";

import CustomTransparentButton from "../customTransparentButton/customTransparentButton.jsx";

import ArrowUprightIcon from "../../assets/icons/arrow-up-right-from-square-solid.svg";

function SingleCertificate({ index, certificate, ...otherProps }) {
  return (
    <div className="single-certificate" {...otherProps}>
      <img
        src={certificate.img}
        alt={certificate.desc}
        className="single-certificate-img"
      />
      <p className="single-certificate-desc">{<em>{certificate.desc}</em>}</p>
      <CustomTransparentButton
        link={certificate.link}
        text={"full certificate"}
        icon={ArrowUprightIcon}
        newTab
      />
    </div>
  );
}

export default SingleCertificate;

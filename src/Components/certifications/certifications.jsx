import React from "react";
import Slider from "react-slick";

import "./certifications.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ISO22000Cert from "../../assets/certificates/Ajwa Foods ISO 22000-PS_page-0001.jpg";
import ISO9001Cert from "../../assets/certificates/Ajwa Foods ISO 9001-PS_page-0001.jpg";
import HACPCert from "../../assets/certificates/Ajwa Pure Foods (HACCP)-PS.png";
import HalalCert from "../../assets/certificates/Ajwa Pure Foods (Halal)_page-0001.jpg";
import KosherCert from "../../assets/certificates/Ajwa Pure Foods (Kosher)_page-0001.jpg";

import SingleCertificate from "../singleCertificate/singleCertificate";

const certifications = [
  {
    key: 1,
    desc: "Halal",
    img: HalalCert,
    link: "https://drive.google.com/file/d/1wYrLMCZ7swoiFijckGrPg9MVJiQ8rLU3/view?usp=drive_link",
  },
  {
    key: 2,
    desc: "Kosher",
    img: KosherCert,
    link: "https://drive.google.com/file/d/1VEK1-kLsI6L_x63rPSwhkpx9H0tK-188/view?usp=drive_link",
  },
  {
    key: 3,
    desc: "HACP",
    img: HACPCert,
    link: "https://drive.google.com/file/d/1Om4BmCrNBO73X8brGwH8J1y-7i0gRx8A/view?usp=drive_link",
  },
  {
    key: 4,
    desc: "ISO 22000",
    img: ISO22000Cert,
    link: "https://drive.google.com/file/d/1MoHiYgaxpW3RaBzGDv8bChA5HIiz0L_r/view?usp=drive_link",
  },
  {
    key: 5,
    desc: "ISO 9001",
    img: ISO9001Cert,
    link: "https://drive.google.com/file/d/1sPp9kAN-SKB-IzkHUqw9Fd7E_b108JCF/view?usp=drive_link",
  },
];

function CustomNextArrow({ className, style, onClick }) {
  return (
    <button
      id="nextIcon"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      &#10095;
    </button>
  );
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      id="prevIcon"
      style={{ ...style }}
      onClick={onClick}
    >
      &#10094;
    </button>
  );
}

function Certifications() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="certifications-section-wrapper">
      <h1 id="certifications-section-title" className="section-title dark">
        certifications
      </h1>
      <div id="slider-wrapper">
        <Slider {...settings}>
          {certifications.map((certificate) => (
            <SingleCertificate
              key={certificate.key}
              index={certificate.key}
              certificate={certificate}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Certifications;

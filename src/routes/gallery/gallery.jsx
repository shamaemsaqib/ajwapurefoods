import React from "react";
import Slider from "react-slick";

import "./gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Big1Img from "../../assets/tech/big 1.jpg";
import Big2Img from "../../assets/tech/big 2.jpg";
import Small1Img from "../../assets/tech/small 1.jpg";
import Small2Img from "../../assets/tech/small 2.jpg";
import Small3Img from "../../assets/tech/small 3.jpg";
import Small4Img from "../../assets/tech/small 4.jpg";
import MediumImg from "../../assets/tech/medium.jpg";
import Photo1 from "../../assets/international/1.jpg";
import ReceivingAwardImg from "../../assets/achievement/receiving.jpg";
import AwardImg from "../../assets/achievement/award.png";

import BoldLightTitle from "../../Components/boldLightTitle/boldLightTitle.jsx";
import CustomArrow from "../../Components/customArrow/customArrow.jsx";

function Gallery() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <CustomArrow dark next />,
    prevArrow: <CustomArrow dark />,
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
    <section id="gallery-section">
      <div id="gallery-technology-subsection">
        <BoldLightTitle first={"latest"} middle={"technology"} bold={2} />
        <div id="gallery-technology-images-wrapper">
          <img src={Big1Img} alt="" className="gallery-technology-img big" />
          <img src={Big2Img} alt="" className="gallery-technology-img big" />
          <img
            src={Small1Img}
            alt=""
            className="gallery-technology-img small"
          />
          <img
            src={Small2Img}
            alt=""
            className="gallery-technology-img small"
          />
          <img
            src={Small3Img}
            alt=""
            className="gallery-technology-img small"
          />
          <img
            src={Small4Img}
            alt=""
            className="gallery-technology-img small"
          />
          <img
            src={MediumImg}
            alt=""
            className="gallery-technology-img medium"
          />
        </div>
      </div>
      <div id="gallery-international-subsection">
        <BoldLightTitle
          first={"international"}
          middle={"participation"}
          bold={1}
        />
        <div id="gallery-international-slider-wrapper">
          <Slider {...settings}>
            <img src={Photo1} alt="" />
            <img src={Photo1} alt="" />
            <img src={Photo1} alt="" />
            <img src={Photo1} alt="" />
            <img src={Photo1} alt="" />
            <img src={Photo1} alt="" />
            <img src={Photo1} alt="" />
            <img src={Photo1} alt="" />
            <img src={Photo1} alt="" />
            <img src={Photo1} alt="" />
          </Slider>
        </div>
      </div>
      <div id="gallery-achievement-subsection">
        <BoldLightTitle first={"best achievement"} middle={"award"} bold={1} />
        <div id="gallery-achievement-images-wrapper">
          <img
            src={ReceivingAwardImg}
            alt=""
            id="gallery-achievement-img-receiving"
          />
          <img src={AwardImg} alt="" id="gallery-achievement-img-award" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;

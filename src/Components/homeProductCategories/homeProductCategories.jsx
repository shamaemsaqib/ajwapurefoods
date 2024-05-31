import React from "react";

import "./homeProductCategories.css";

import RiceImg from "../../assets/misc/Rice-500x500.png";
import SaltImg from "../../assets/misc/Salt-500x500.png";
import SpicesImg from "../../assets/misc/Spices-500x500.png";

import ArrowRightIcon from "../../assets/icons/arrow-right-solid.svg";

import SectionTitle from "../sectionTitle/sectionTitle";
import HomeSingleProductCategory from "../homeSingleProductCategory/homeSingleProductCategory";
import CustomTransparentButton from "../customTransparentButton/customTransparentButton";

function HomeProductCategories() {
  const productCategories = [
    {
      key: 1,
      name: "rice",
      img: RiceImg,
      desc: "Royal Salva Foods, pure Basmati Rice Brands like Ajwa, Royal Salva are synonyms with quality and real taste. when one thinks of Royal Salva Foods the first thing that comes to mind is extreme quality, rich taste, pure and guaranteed aromatic Basmati Rice Products since 1989.",
    },
    {
      key: 2,
      name: "himalyan pink salt",
      img: SaltImg,
      desc: "Royal Salva Foods is one of the largest Pure Himalayan Pink Salt supplier, manufacturer and exporter of Pakistan.We are Manufacturing & Worldwide Exporting of pure Himalayan edible Pink Salt & pink salt crafts which brings the world’s best real Himalayan Crystal Rock Salt Lamps, Cooking Slabs, Soaps, inhaler etc.",
    },
    {
      key: 3,
      name: "spices",
      img: SpicesImg,
      desc: "Royal Salva Foods have been an integral part of every cuisine(food) since ancient times, adding flavor and fragrance to it therefore we offer 100% pure and natural spices that are hygienically packed, and well-known for quality, purity and value.",
    },
  ];

  return (
    <div id="product-categories-section-wrapper">
      <SectionTitle
        text={"our products"}
        idName="product-categories-section-title"
      />
      <div id="product-categories-wrapper">
        {productCategories.map((category) => (
          <HomeSingleProductCategory key={category.key} category={category} />
        ))}
      </div>
      <CustomTransparentButton
        light
        link={"/products"}
        text={"browse all products"}
        icon={ArrowRightIcon}
      />
    </div>
  );
}

export default HomeProductCategories;

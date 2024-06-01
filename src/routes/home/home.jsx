import React from "react";

import "./home.css";

import Header from "../../Components/header/header.jsx";
import HomeProductCategories from "../../Components/homeProductCategories/homeProductCategories.jsx";
import Certifications from "../../Components/certifications/certifications.jsx";
import Brands from "../../Components/brands/brands.jsx";

function Home() {
  return (
    <div>
      <Header />
      <HomeProductCategories />
      <Certifications />
      <Brands />
    </div>
  );
}

export default Home;

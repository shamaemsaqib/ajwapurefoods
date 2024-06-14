import React from "react";

import "./aboutFounders.css";

import PhotoPlaceHolder from "../../assets/misc/Photo Place Holder.jpg";

import BoldLightTitle from "../boldLightTitle/boldLightTitle";

function AboutFounders() {
  return (
    <div id="about-founders-subsection">
      <BoldLightTitle
        idName={"founders-subsection-title"}
        first={"meet our"}
        middle={"founders"}
        bold={2}
      />
      <div id="founders-wrapper">
        <article className="single-founder-wrapper">
          <div className="single-founder-img-wrapper">
            <img src={PhotoPlaceHolder} alt="" className="single-founder-img" />
          </div>
          <div className="single-founder-info">
            <p className="single-founder-msg">
              "It is from the perservance and dedication of our team of experts
              that the Ajwa Foods industry derives it's strength and pride. I
              pay tribute to those who have committed to beacon of Ajwa eve
              shining through their handwork and thinking. <br /> <br />
              May Allah Almighty bless us with strength, clear vision and
              dedication so that we may continue to fulfill the requirements of
              confidence that we have set for ourselves regarding supply of best
              quality rice worldwide."
            </p>
            <div className="single-founder-name-wrapper">
              <h2 className="single-founder-info-name">
                mian abdul razzaq
                <span id="single-founder-info-name-late">(late)</span>
              </h2>
              <h4 className="single-founder-info-role">chairman</h4>
            </div>
          </div>
        </article>
        <article className="single-founder-wrapper right">
          <div className="single-founder-img-wrapper">
            <img src={PhotoPlaceHolder} alt="" className="single-founder-img" />
          </div>
          <div className="single-founder-info">
            <p className="single-founder-msg">
              "Our mission is to provide the highest quality, hygienic, and
              fresh agro-based products and food grains to our customers at fair
              prices. We believe that quality creates value, and we strive to
              make a difference through our exceptional products.
              <br /> <br /> We understand the importance of outstanding service.
              Our company prides itself on developing products that exceed
              market expectations. Our commitment to excellence helps us build
              lasting relationships and create meaningful value in the
              agro-based product and food grain industry."
            </p>
            <div className="single-founder-name-wrapper">
              <h2 className="single-founder-info-name">
                hafiz shehreyaar sheikh
              </h2>
              <h4 className="single-founder-info-role">chief executive</h4>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default AboutFounders;

import React from "react";

import "./about-us.css";

import MissionImg from "../../assets/misc/mission.png";
import VisionImg from "../../assets/misc/vision.png";

import AboutFounders from "../../Components/aboutFounders/aboutFounders";

function AboutUs() {
  return (
    <section id="about-section-wrapper">
      <div id="about-story-subsection">
        <h2 className="section-title">
          our <strong className="bold">story</strong>
        </h2>
        <p id="about-story-subsection-text">
          The management of <span className="bold">Ajwa Foods Industries</span>{" "}
          entered in rice business in 1989 as rice traders under the name of{" "}
          <span className="bold">Muslim Rice Traders</span>. In start it was a
          modest set up mainly dealing in rice trading at local level. By the
          grace of Almighty ALLAH within a short time span we achieved many
          goals in trading of rice from local to national and international
          level. Apart from trading we set up two husking/processing units and
          have become part of fabric of international rice trade. <br /> <br />
          Today our group of companies comprises of several industrial units
          mainly dealing in rice with a substational turnover. We have strived
          hard under one professional management to achieve the present status.{" "}
          <span className="bold">Mian Abdul Razzaq</span> the Chairman of{" "}
          <span className="bold">Ajwa Foods Industry</span> is a prominent
          social personality, who has a vast experience in agriculture business.
          He is strong believer in building long lasting sustainable relations
          with the communities in which we work.
        </p>
      </div>
      <AboutFounders />
      <div id="about-values-subsection">
        <h2 className="section-title" id="about-values-subsection-title">
          our <strong className="bold">core values</strong>
        </h2>
        <div id="about-values-subsection-cards-wrapper">
          <div className="about-values-subsection-card">
            <div className="about-values-subsection-card-img-wrapper">
              <img
                src={VisionImg}
                alt=""
                className="about-values-subsection-card-img"
              />
            </div>
            <div className="about-values-subsection-card-text-wrapper">
              <h3 className="about-values-subsection-card-title">vision</h3>
              <p className="about-values-subsection-card-text">
                To rise as a top-notch global exporter by providing wide range
                of high-quality Pakistani Agro commodities under one roof and
                thereby enrich Pakistan commodities with irresistible quality
                for world to enjoy.
              </p>
            </div>
          </div>
          <div className="about-values-subsection-card">
            <div className="about-values-subsection-card-img-wrapper">
              <img
                src={MissionImg}
                alt=""
                className="about-values-subsection-card-img"
              />
            </div>
            <div className="about-values-subsection-card-text-wrapper">
              <h3 className="about-values-subsection-card-title">mission</h3>
              <p className="about-values-subsection-card-text">
                For us quality is the key to success and we are empowered with
                all aspects of delivering it. By high quality executions we have
                reached a high level of recognition. We manufacture products as
                per standard specifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

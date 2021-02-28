import React, { Suspense, useRef, useEffect } from "react";
import "./LandingPage.scss";
import landingPageLogo from "../../assets/camp-fire.svg";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div class="content-container">
        <div className="title-container">
          <h1 className="title">HI! I Am Josiah Ngu</h1>
          <h1 className="subheading">
            Full Stack Software Developer and Nature lover
          </h1>
        </div>
      </div>
      <div class="right-container">
        <img src={landingPageLogo} className="side-img" />
      </div>
    </div>
  );
};
export default LandingPage;

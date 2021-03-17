import React, { Suspense, useRef, useEffect } from "react";
import "./LandingPage.scss";
import landingPageLogo from "../../assets/landing-page.svg";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div class="content-container">
        <div className="title-container">
          <h1 className="title">HI!</h1>
          <h1 className="sub-title">I Am Josiah Ngu</h1>
          <h1 className="subheading">
            a full stack software developer and specializing in Web Development
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

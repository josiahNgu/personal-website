import React from "react";
import "./LandingPage.scss";
import SidePic from "../../misc/landing_page.svg";

import DownArrow from "../../misc/down_arrow.svg";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="left-side">
        <h2 className="title">I'm Josiah Ngu</h2>

        <h3 className="subheading">
          Currently Maryland based full stack developer who specialized in web
          development. Passionate about turning problems into solutions and the
          power of computing. Always appreciate a clean and minimalistic design
          and architectures.
        </h3>
        <img className="view-more" src={DownArrow} alt="view more" />
      </div>
      <div class="right-side">
        <img className="side-img" src={SidePic} alt="code svg" />
      </div>
    </div>
  );
};
export default LandingPage;

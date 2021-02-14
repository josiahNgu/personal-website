import React from "react";
import "./LandingPage.css";
import Nomad from "../../misc/nomad.svg";
import TypeWriter from "../../hoc/TypeWriter/TypeWriter";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="left-side">
        <h2 className="title"> Josiah Ngu</h2>
        <h3 className="subheading">Full Stack Software Developer</h3>
      </div>
      <img className="side-img" src={Nomad} />
    </div>
  );
};
export default LandingPage;

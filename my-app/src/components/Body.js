import React, { Component } from "react";
import HorizontalScroll from "react-scroll-horizontal";
import "./Body.scss";
import Experience from "../components/Experience/Experience";
import LandingPage from "./LandingPage/LandingPage";
import Resume from "../components/Resume/Resume";
import Project from "../components/Project/Project";
import SideBarNav from "./UI/SideBarNav/SideBarNav";
class Body extends Component {
  render() {
    const child = { width: `300em`, height: `100%` };
    const parent = { width: `60em`, height: `100%` };
    return (
      <div className="body-component">
        {/* <HorizontalScroll> */}
        <div>
          <div className="section" style={{ height: '100vh' }} id="landing-page">
            <LandingPage />
          </div>
          <div className="section" id="experience">
            <Experience />
          </div>
          <div className="section" id="resume">
            <Resume />
          </div>

          <div className="section" id="project">
            <Project />
          </div>
          {/* <div id="footer">
            <Footer />
          </div> */}
        </div>
        <SideBarNav />
        {/* </HorizontalScroll> */}
      </div>
    );
  }
}

export default Body;

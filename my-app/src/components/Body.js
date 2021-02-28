import React, { Component } from "react";
import HorizontalScroll from "react-scroll-horizontal";
import "./Body.scss";
import { NavigationBar as NavBar } from "./UI/NavigationBar/NavigationBar.js";
import Experience from "../components/Experience/Experience";
import LandingPage from "./LandingPage/LandingPage";
import Resume from "../components/Resume/Resume";
import Project from "../components/Project/Project";
class Body extends Component {
  render() {
    const child = { width: `300em`, height: `100%` };
    const parent = { width: `60em`, height: `100%` };
    return (
      <div className="body-component">
        {/* <HorizontalScroll> */}
        <div>
          <NavBar />
        </div>
        <div>
          <div className="section" id="landing-page">
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
        {/* </HorizontalScroll> */}
      </div>
    );
  }
}

export default Body;

import React, { Component } from "react";
import { Helmet } from "react-helmet";
import HorizontalScroll from "react-scroll-horizontal";
import "./Body.scss";
import Experience from "../components/Experience/Experience";
import LandingPage from "./LandingPage/LandingPage";
import Resume from "../components/Resume/Resume";
import Project from "../components/Project/Project";
import SideBarNav from "./UI/SideBarNav/SideBarNav";
class Body extends Component {
  render() {
    return (

      <div className="body-component">
        <Helmet>
          <title>Josiah Ngu</title>
          <meta name="description"
            content="Josiah Ngu. Full Stack Software Developer based in Maryland" />
        </Helmet>
        {/* <HorizontalScroll> */}
        <div>
          <div className="section" style={{ minHeight: '50vh' }} id="landing-page">
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
        </div>
        <SideBarNav />
      </div >
    );
  }
}

export default Body;

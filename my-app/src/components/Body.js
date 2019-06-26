import React, { Component } from "react";
import NavBar from "./UI/NavigationBar/NavigationBar.js";
import Experience from "../components/Experience/Experience";
import AboutMe from "./AboutMe.js";
import Terminal from "../components/Terminal/Terminal";
import Footer from "../components/Footer/Footer.js";
import Resume from "../components/Resume/Resume";
import Project from "../components/Project/Project";
class Body extends Component {
  render() {
    return (
      <div className="bodyClass">
        <div className="sticky-top">
          <NavBar />
        </div>
        <div>
          <div id="terminal">
            <Terminal />
          </div>
          <div id="resume">
            <Resume />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="aboutMe">
            <AboutMe />
          </div>
          <div id="project">
            <Project />
          </div>
          <div id="footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;

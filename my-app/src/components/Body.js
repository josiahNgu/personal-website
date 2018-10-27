import React, { Component } from 'react';
import NavBar from '../components/NavBar.js';
import AboutMe from '../components/AboutMe.js';
import LandingPage from '../components/LandingPage';
import Footer from '../components/Footer.js';
import Skills from '../components/Skills.js';
import '../style/App.css';
const resumeLink = "https://drive.google.com/open?id=10HU5IXSSJLSGV_ukD_qoPgKUXwkY3geo";

class Body extends Component {
  render() {
    return (
      <div className="bodyClass">
      <div id="spy">
      <NavBar/>
       </div>
        <div className="scrollspy" data-spy="scroll" data-offset="50" data-target="#spy">
        <div id="landingPage">
           <LandingPage/>
         </div>
         <div id="aboutMe">
          <AboutMe/>
         </div>
        <div id="skill">
          <Skills/>
        </div>
        <div id="footer">
          <Footer/>
        </div>
      </div>
      </div>   
    );
  }
}

export default Body;
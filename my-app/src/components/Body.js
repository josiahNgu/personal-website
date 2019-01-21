import React, { Component } from 'react';
import NavBar from '../components/NavBar.js';
import AboutMe from '../components/AboutMe.js';
import LandingPage from '../components/LandingPage';
import Footer from '../components/Footer.js';
import Skills from '../components/Skills.js';

class Body extends Component {
  render() {
    return (
      <div className="bodyClass">
        <div className="sticky-top">
          <NavBar/>
        </div>
        <div data-spy="scroll" data-offset="50" data-target=".spy">
        <div id="landingPage">
           <LandingPage/>
         </div>
          <AboutMe id ="aboutMe"/>
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
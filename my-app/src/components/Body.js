import React, { Component } from 'react';
import {Button} from 'reactstrap';
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
        <nav className="navbar navbar-expand-lg fixed-top  navbar-light">
          <a className="nav-brand">AUGUST</a>
          <div className="collapse navbar-collapse fle-grow-1 text-right">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
           <a className="nav-link active" href="#landingPage">-Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#aboutMe">-About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#footer">-Footer</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skill">-Skill</a>
          </li>
          <li className="nav-item">
            <Button outline color="danger" target="_blank" href={resumeLink} >Resume</Button>
          </li>  
          </ul> 
          </div>      
        </nav>
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
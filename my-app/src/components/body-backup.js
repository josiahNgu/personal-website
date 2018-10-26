import React, { Component } from 'react';
import {Button} from 'reactstrap';
import AboutMe from '../components/AboutMe.js';
import LandingPage from '../components/LandingPage';
import Footer from '../components/Footer.js';
import Skills from '../components/Skills.js';
import '../style/App.css';
import logo from '../misc/logo.png';
const resumeLink = "https://drive.google.com/open?id=10HU5IXSSJLSGV_ukD_qoPgKUXwkY3geo";

class Body extends Component {
  componentDidMount() {
    document.title = "August";
  }
  render() {
    return (
      <body className="bodyClass" data-spy="scroll" data-target=".navbar" data-target="50">
      <div id="spy">
        <ul className="navbar navbar-nav  navbar-expand-lg navbar-light fle-grow-1 text-right">
          <a className="nav-brand navlogo">AUGUST</a>
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
        </ul>
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
      </body>   
    );
  }
}

export default Body;
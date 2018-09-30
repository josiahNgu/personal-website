import React, { Component } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import AboutMe from './components/AboutMe.js';
import Header from './components/Header.js';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer.js';
import './style/App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ParallaxProvider>
        <LandingPage/>
        </ParallaxProvider>
        <AboutMe/>
        <Footer/>
      </React.Fragment>

    );
  }
}

export default App;
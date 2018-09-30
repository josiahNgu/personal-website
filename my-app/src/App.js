import React, { Component } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './style/App.css';
import AboutMe from './components/AboutMe.js';
import Header from './components/Header.js';
import LandingPage from './components/LandingPage';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ParallaxProvider>
        <LandingPage/>
        </ParallaxProvider>
        <AboutMe/>
      </React.Fragment>

    );
  }
}

export default App;
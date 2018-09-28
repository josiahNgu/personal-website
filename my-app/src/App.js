import React, { Component } from 'react';
import logo from './misc/logo.png';
import './style/App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import AboutMe from './components/AboutMe.js';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <AboutMe/>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import logo from './misc/logo.png';
import './style/App.css';
import Header from './components/Header.js';
import Home from './components/Home';
import AboutMe from './components/AboutMe.js';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Home/>
      </div>
    );
  }
}

export default App;
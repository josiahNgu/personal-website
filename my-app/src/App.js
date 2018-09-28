import React, { Component } from 'react';
import logo from './misc/logo.png';
import './style/App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header/>
        </div>
        <div className="position">
          <Main/>
        </div>
      </div>
    );
  }
}

export default App;
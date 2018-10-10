import React, { Component } from 'react';
import Body from './components/Body';
import './style/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { github } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
// library.add(github);

class App extends Component {
  render() {
    return (
      <div>
        <Body/>
      </div> 
    );
  }
}

export default App;
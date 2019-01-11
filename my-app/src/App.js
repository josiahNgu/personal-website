import React, { Component } from 'react';
import Body from './components/Body';
import ReactGA from 'react-ga';
import './style/App.css';

function initializeReactGA() {
  ReactGA.initialize('UA-131123052-1');
  // ReactGA.pageview('/');
}

class App extends Component {


  componentDidMount(){
    initializeReactGA();
    document.title = "JOSIAH NGU";
  }
  render() {
    return (
      <div>
        <Body/>
      </div> 
    );
  }
}


export default App;
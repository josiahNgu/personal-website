import React, { Component } from 'react';
import Body from './components/Body';
import './style/App.css';


class App extends Component {
  componentDidMount(){
    document.title = "AUGUST";
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
import React, { Component } from 'react';
import {Button} from 'reactstrap';
import linkedln from'../misc/linkedin.png';
class App extends Component {
  render() {
    return (
     <div className=" container-fluid footer">
      <div>
        <img src={linkedln} alt="linkedln"/>
        <div className="">
        </div>
      </div>
     </div>
    );
  }
}

export default App;
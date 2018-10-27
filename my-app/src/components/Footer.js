import React, { Component } from 'react';
import linkedln from'../misc/linkedin.png';
class App extends Component {
  render() {
    return (
     <div className=" container-fluid footer">
      <div className="position-relative">
        <img src={linkedln} alt="linkedln"/>
        <div className="justify-content-center row">
          <h4>Linkedln #1817</h4>
          <h4>github</h4>
          <h4>Resume</h4>
        </div>
        </div>
        <div className="d-flex flex-row justify-content-center ">
        <div className="d-flex flex-column justify-content-end">
          <span> &#169; 2018 Josiah Ngu.-all rights reserved-</span>
        </div>
          </div>
     </div>
    );
  }
}

export default App;
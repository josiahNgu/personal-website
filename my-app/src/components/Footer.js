import React, { Component } from 'react';
import {Button} from 'reactstrap';
import linkedln from'../misc/linkedin.png';
class App extends Component {
  render() {
    return (
     <div className="footer">
      <div>
        <img src={linkedln} />
        <div className="">
        <a href="your link here"> <i className="fa fa-dribbble fa-4x"></i></a>
        </div>
      </div>
     </div>
    );
  }
}

export default App;
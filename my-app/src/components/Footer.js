import React, { Component } from 'react';
import {Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import linkedln from'../misc/linkedin.png';
class App extends Component {
  render() {
    return (
     <div className=" container-fluid footer">
      <div>
        <img src={linkedln} />
        <div className="">
        test: <FontAwesomeIcon icon="stroopwafel" />
        </div>
      </div>
     </div>
    );
  }
}

export default App;
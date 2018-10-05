import React, { Component } from 'react';
import {Button} from 'reactstrap';
import linkedln from'../misc/linkedin.png';
class App extends Component {
  render() {
    return (
     <div className="footer">
      <div>
        <img src={linkedln} />
        <div className="mail">
          <Button href="mailto:joxiah98@gmail.com" target="_top"></Button>
        </div>
      </div>
     </div>
    );
  }
}

export default App;
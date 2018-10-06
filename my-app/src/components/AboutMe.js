import React from 'react';
 class AboutMe extends React.Component {

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center aboutMe container-fluid">
        <div className="col-md-8 row">
          <div className="col-md-4">
            <h1>insert Image</h1> 
          </div>
          <div className="col-md-8">
            <p>
            I am currently a student at University of Nebraska-Lincoln. I  was blessed to work at AXA Malaysia
            over the summer as a web-developer on their <a href="http://axagotravel.com" rel="noopener noreferrer" target="_blank">travel revamp project.</a>
            Captivated by creative graphic design , photography, aesthetics design. 
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutMe;
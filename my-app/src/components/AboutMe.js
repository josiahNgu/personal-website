import React from 'react';
import picture from '../misc/chinatown.JPG';
 class AboutMe extends React.Component {

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center aboutMe container-fluid">
        <div className="col-xs-12 col-sm-10 col-md-12 col-lg-10 row">
          <div className="d-flex align-self-center col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <img src={picture} alt="self-potrait" className="d-flex avatar align-self-center" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 align-self-center ">
            <h3>JOSIAH NGU</h3>
            <p>
            I am currently a junior at the University of Nebraska-Lincoln. I am pursuing a bachelor degree in Computer Science and a minor in Mathematics.I  was blessed to work at AXA Malaysia
            over the summer as a web-developer on their <a href="http://axagotravel.com" rel="noopener noreferrer" target="_blank">travel revamp project.</a>
            Captivated by creative graphic design , photography, aesthetics design. 
            </p>
            <p>
              I like to exercise during my free time. My dream is to travel the world. 
              Obsessed with: food, aesthetics design, football and basketball.
              My favorite NBA team is Lakers.

            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutMe;
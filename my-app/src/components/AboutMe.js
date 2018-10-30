import React from 'react';
import picture from '../misc/potrait.jpg';
 class AboutMe extends React.Component {

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center aboutMe container-fluid">
        <div className="col-xs-12 col-sm-10 col-md-12 col-lg-10 row">
          <div className="d-flex flex-column justify-content-center align-self-center col-xs-12 col-sm-12 col-md-6 col-lg-5">
          <img src={picture} alt="self-potrait" className="d-flex avatar align-self-center" />
          </div>
          {/* fix text center  */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-7 d-flex flex-column align-self-center  ">
            <h3>JOSIAH NGU</h3>
            <p>
            I am currently a junior pursuing bachelor degree in computer science and a minor in Mathematics at the University of Nebraska-Lincoln. 
            I was blessed to work at AXA Malaysia
            over the summer as a web-developer on their <a href="http://axagotravel.com" rel="noopener noreferrer" target="_blank">travel revamp project.</a>
            </p>
            <p>&#9992; Dream: travel the world </p>
            <p>
            &#9775; Enjoy: food | aesthetics design | football | basketball
            </p>
            <p>&#9729; Fav Teams: Los Angeles Lakers | Houston Texans | Huskers Football</p>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutMe;
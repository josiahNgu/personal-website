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
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 d-flex flex-column align-self-center">
            <h3>JOSIAH NGU</h3>
            <p >
              <span className="">
              I am currently a junior pursuing bachelor degree in computer science and a minor in Mathematics at the University of Nebraska-Lincoln. 
              I was fortunate to has the chance to work at AXA Malaysia
              over the summer as a web-developer on their <a href="http://axagotravel.com" rel="noopener noreferrer" target="_blank">travel revamp project.</a>
              </span>
            </p>
            <p>My dream is to travel the world. It would be great to start my adventure off in SouthEast
               Asia and work my way into Europe. Running and playing basketball are the two main sports
               that I like to do during my spare time. I had been running a lot more recently to practice
               for the upcoming Lincoln marathon in May. I also watch NBA basketball, NFL football, and
               Huskers football during my leisure time. My favorite teams are LA Lakers, Nebraska Cornhuskers,
               and Houston Texans. 
              </p>
            <p> I love most food in general, but nothing will beat Malaysian cuisine in my heart. I am always down to get
                some fresh boba and ice cream. 
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutMe;
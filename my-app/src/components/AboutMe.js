import React from "react";
class AboutMe extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center aboutMe container-fluid">
        <div className="col-xs-12 col-sm-10 col-md-12 col-lg-10 row">
          <div className="d-flex flex-column justify-content-center align-self-center col-xs-12 col-sm-12 col-md-6 col-lg-5" />
          {/* fix text center  */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 d-flex flex-column text-justify">
            <h3 className="d-flex justify-content-center">JOSIAH NGU</h3>
            <p>
              I am currently a junior pursuing a bachelor degree in Computer
              Science and a minor in Mathematics at the University of
              Nebraska-Lincoln, where I am the recipient of Global Ambassador
              Scholarship. I am interested in web development, IT, and
              cybersecurity. My most recent project is working on the UNL CSE
              Senior Design project with Speedway Motors.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutMe;

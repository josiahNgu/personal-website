import React from "react";
class AboutMe extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center aboutMe container">
        <div className="col-xs-12 col-sm-12 col-md-6   text-justify">
          <h3 className="d-flex justify-content-center">JOSIAH NGU</h3>
          <p>
            I am currently a senior pursuing a bachelor degree in Computer
            Science and a minor in Mathematics at the University of
            Nebraska-Lincoln, where I am the recipient of Global Ambassador
            Scholarship. I am interested in web development, IT, and
            cybersecurity. My most recent project is working on the UNL CSE
            Senior Design project with Speedway Motors.
          </p>
        </div>
      </div>
    );
  }
}
export default AboutMe;

import React, { Component } from "react";
import AXALogo from "../../misc/AXALogo.png";
import UNLogo from "../../misc/UNL-logo.png";
import SpeedwayLogo from "../../misc/SpeedwayLogo.svg";
import "./Experience.css";
const resumeLink =
  "https://drive.google.com/open?id=10HU5IXSSJLSGV_ukD_qoPgKUXwkY3geo";
const tdStyle = {
  padding: "0px"
};
class Experience extends Component {
  render() {
    return (
      <div className=" experience">
        <div className=" container col-lg-10 ">
          <div className="text-center">
            <h6>
              <b>WORK EXPERIENCE</b>
            </h6>
            <a
              href={resumeLink}
              className="CustomButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            <hr />
          </div>
          <div className="newExperience">
            <table>
              <tbody>
                <tr>
                  <td className="col-sm-2" style={tdStyle}>
                    <h4>
                      <b>Senior Design Project</b>
                    </h4>
                  </td>
                  <td className="col-sm-10 ">
                    <img className="center logo" src={UNLogo} alt="UNL Logo" />
                    <img
                      className="center logo"
                      src={SpeedwayLogo}
                      alt="Speedway Motors Lincoln Logo"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>IOS Developer</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Lincoln, Nebraska (Fall 2018 - present)</h6>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-justify">
              Work with a group of students as part of the Capstone class by
              developing an IOS Application using Swift for our sponsor
              "Speedway Motors". The core functionality of the app is the
              curbside pickup feature. Our team applied software engineering
              practices by conducting rigorous unit testing and a Scrum software
              methodology.
            </p>
          </div>

          <div className="newExperience">
            <table>
              <tbody>
                <tr>
                  <td className="col-lg-6" style={tdStyle}>
                    <h5>
                      <b>AXA Affin General Insurance</b>
                    </h5>
                  </td>
                  <td className="col-lg-6">
                    <img className="center logo" src={AXALogo} alt="AXA Logo" />
                  </td>
                </tr>
              </tbody>
            </table>
            <h6>Web Developer, Digital Team</h6>
            <h6>Kuala Lumpur, Malaysia (Summer 2018)</h6>
            <p className="text-justify">
              Working directly with the designer, other developers and product
              manager to develop, maintain the front-end of AXA travel insurance
              Malaysia website promptly and on schedule when bugs or new designs
              is prompted.
            </p>
            <a
              href="https://digital.axa.com.my/travel-insurance-malaysia/"
              rel="noopener noreferrer"
              target="_blank"
              className="CustomButton"
            >
              Visit website
            </a>
          </div>

          <div className="newExperience">
            <h5>
              <b>Plus Intralink Sdn Bhd</b>
            </h5>
            <h6>IT Assistant, IT Department</h6>
            <h6>Sarawak, Malaysia (Summer 2016)</h6>
            <p className="text-justify">
              Inspected and configured computer before deployment to client and
              provided excellent customer service by satisfying the client’s
              needs for every new computer to run correctly on their side. Also,
              making sure that the client received the latest company software
              update on every new release.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;

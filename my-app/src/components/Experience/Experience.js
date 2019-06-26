import React, { Component } from "react";
import AXALogo from "../../misc/AXALogo.png";
import UNLogo from "../../misc/UNLogo.jpg";
import SpeedwayLogo from "../../misc/SpeedwayLogo.svg";
import "./Experience.css";
const tdStyle = {
  padding: "0px"
};
class Experience extends Component {
  render() {
    return (
      <div className=" experience">
        <div className=" container col-lg-10 ">
          <div>
            <h3>Work Experience</h3>
            <hr />
          </div>
          <div className="newExperience">
            <tbody>
              <tr>
                <td className="col-sm-3" style={tdStyle}>
                  <h5>Senior Design Project</h5>
                </td>
                <td className="col-sm-3 ">
                  <img className="center logo" src={UNLogo} alt="UNL Logo" />
                </td>
                <td className="col-xs-6">
                  <img
                    className="center logo"
                    src={SpeedwayLogo}
                    alt="Speedway Motors Lincoln Logo"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <h6>IOS Developer</h6>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>Lincoln, Nebraska (Fall 2018 - present)</h6>
                </td>
              </tr>
            </tbody>
            <ul>
              <li>
                - Developed IOS App using Swift4, Zendesk and Google Maps API
              </li>
              <li>
                - Implemented Zendesk API for livechat and Q&#38;A support
              </li>
              <li>
                - Built curbside pickup functionality to allow the end user to
                alert customer service that they had arrived at a curbside
                pickup spot.
              </li>
              <li>
                - Integrated push notification to send user newest deals and
                information
              </li>
              <li>
                - Conducted rigorous unit testing to ensure the app run smoothly
                without issues
              </li>
              <li>
                - Applied software engineering practices by conducting rigorous
                unit testing, utilizing code linting and version control
              </li>
            </ul>
          </div>

          <div className="newExperience">
            <tbody>
              <tr>
                <td className="col-lg-6" style={tdStyle}>
                  <h5>AXA Affin General Insurance</h5>
                </td>
                <td className="col-lg-6">
                  <img className="center logo" src={AXALogo} alt="AXA Logo" />
                </td>
              </tr>
            </tbody>
            <h6>Web Developer, Digital Team</h6>
            <h6>Kuala Lumpur, Malaysia (Summer 2018)</h6>
            <ul>
              <li>
                - Helped developed front-end of AXA travel insurance Malaysia
                website using ReactJS
              </li>
              <li>- Worked on back-end using NextJS and ReduxJS </li>
              <li>
                - Updated front end with the latest design promptly and on
                schedule
              </li>
              <li>
                - Maintained website by fixing bugs and performance issues
              </li>
              <li>
                -{" "}
                <a
                  href="https://digital.axa.com.my/travel-insurance-malaysia/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="experience"
                >
                  Visit the website
                </a>
              </li>
            </ul>
          </div>

          <div className="newExperience">
            <h5>Plus Intralink Sdn Bhd</h5>
            <h6>IT Assistant, IT Department</h6>
            <h6>Sarawak, Malaysia (Summer 2016)</h6>
            <ul>
              <li>
                - Inspected and configured computer before deployment to client
              </li>
              <li>
                - Provided excellent customer service by satisfying the client’s
                needs for every new computer to run correctly on the client’s
                site
              </li>
              <li>
                - Make sure the client received the latest company software
                update on every new release
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;

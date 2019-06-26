import React from "react";
import "./Resume.css";
import UNLogo from "../../misc/UNL-logo.png";
const resumeLink =
  "https://drive.google.com/open?id=10HU5IXSSJLSGV_ukD_qoPgKUXwkY3geo";
const tdStyle = {
  padding: "0px"
};
const programmingSkills = [
  "Java",
  "Javascript",
  "C++",
  "GIT",
  "HTML/CSS",
  "NodeJS",
  "Swift"
];
const resume = () => {
  return (
    <div className="Resume">
      <div className=" container col-lg-10 ">
        <div className="text-center">
          <h6 className="TagLine">
            <b>RESUME</b>
          </h6>
          <a
            href={resumeLink}
            className="CustomButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
        <hr />
        <tbody>
          <tr>
            <td className="col-lg-6" style={tdStyle}>
              <h5>EDUCATION</h5>
            </td>
            <td className="col-lg-6 ">
              <img className="center logo" src={UNLogo} alt="UNL Logo" />
            </td>
          </tr>
          <tr>
            <td>
              <p>University of Nebraska-Lincoln</p>
            </td>
          </tr>
          <tr>
            <td>
              <h5>
                <b>Computer Science, B.S</b>
              </h5>
            </td>
            <td>
              <p>Lincoln, Nebraska</p>
            </td>
          </tr>
        </tbody>
        <p>Relevant Coursework</p>
        <ul>
          <li> Object-Oriented programming</li>
          <li> Intro to Discrete Structure</li>
          <li> Data Structure & Algorithms</li>
          <li> Computer Systems Engineering</li>
          <li> Programming Langugage Concepts</li>
          <li> Automata Computing & Language</li>
          <li> Data & Network Security</li>
          <li> Web Development</li>
          <li>Operating System Kernels</li>
          <li> Software Lifecycle & Methodologists</li>
        </ul>
      </div>
    </div>
  );
};
export default resume;

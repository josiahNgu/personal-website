import React from "react";
import "./Resume.css";
import UNLogo from "../../misc/UNLogo.jpg";
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
        <h3 className="TagLine">Resume</h3> <hr />
        <tbody>
          <tr>
            <td className="col-lg-6" style={tdStyle}>
              <h5>Education</h5>
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
              <b>Computer Science, B.S</b>
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

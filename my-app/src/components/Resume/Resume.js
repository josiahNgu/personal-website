import React from "react";
import "./Resume.scss";
import { BsArrowReturnRight } from 'react-icons/bs';
import { openLinkInNewWindow } from "../../utilities/utilities";
const resumeLink =
  "https://drive.google.com/open?id=10HU5IXSSJLSGV_ukD_qoPgKUXwkY3geo";
const tdStyle = {
  padding: "0px",
};
const knowledges = [
  "Object-Oriented programming",
  "Data Structure & Algorithms",
  "Computer Systems Engineering",
  "Programming Langugage Concepts",
  "Automata Computing & LanguageCSS",
  "Data & Network Security",
  "Web Application Development",
  "Operating System Kernels",
  "Software Lifecycle & Methodologists"
];

const resume = () => {
  return (
    <div className="Resume">
      <div className=" container col-lg-10 ">
        <div>
          <h2 className="d-inline light-slate-color ">
            <b >/EDUCATION</b>
          </h2>
          <ul className="mt-3">
            {
              knowledges.map((item, index) => <li className="mb-2" key={index}><BsArrowReturnRight className="mr-2 alternate-color " style={{ fontSize: '1.1rem' }} />{item}</li>)
            }

          </ul>

          {/* <button
            className="default-button"
            onClick={() => openLinkInNewWindow(resumeLink)}
          >
            Download Resume
          </button> */}
        </div>
      </div>

    </div>
  );
};
export default resume;
/*
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

          */




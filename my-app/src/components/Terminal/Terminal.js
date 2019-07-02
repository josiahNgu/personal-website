import React from "react";
import "./Terminal.css";
import TypeWriter from "../../hoc/TypeWriter/TypeWriter";
const terminal = () => {
  return (
    <div className="Terminal">
      <p className="text-center TerminalHeader">
        HELLO THERE, I'M A <br /> <TypeWriter />
      </p>
      <div className="Menu">
        <div className="Button CloseButton " />
        <div className="Button MinimizeButton" />
        <div className="Button ZoomButton" />
      </div>
      <div className="Screen">
        <p>$ cat profile.txt</p>
        <p>Name: "Josiah Ngu"</p>
        <p>Origin: "Malaysia"</p>
        <p>Education: "University of Nebraska - Lincoln"</p>
        <p>Major: "Computer Science"</p>
        <p>Expected_Graduation: "May 2020"</p>
        <p>Spoken Languages: Fluent in both English and Madarin</p>
        <p>
          Interest: ["Minimalism" , "Music" , "Code" , "Full Stack Development"
          , "Mobile Application Development"]
        </p>
        <p>
          Email:
          <a
            className="link"
            href="mailto:josiahngu@gmail.com?Subject=Hello"
            target="_top"
          >
            josiahngu@gmail.com
          </a>
        </p>
        <p>
          ><span className="Cursor">_</span>
        </p>
      </div>
    </div>
  );
};
export default terminal;

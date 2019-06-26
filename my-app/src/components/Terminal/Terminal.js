import React from "react";
import "./Terminal.css";

const terminal = () => {
  return (
    <div>
      <div className="Menu">
        <div className="Button CloseButton " />
        <div className="Button MinimizeButton" />
        <div className="Button ZoomButton" />
      </div>
      <div className="Screen">
        <p>$ more profile</p>
        <p>Name: "Josiah Ngu"</p>
        <p>Origin: "Malaysia"</p>
        <p>Education: "University of Nebraska - Lincoln"</p>
        <p>major: "Computer Science"</p>
        <p>Expected_Graduation: "May 2020"</p>
        <p>
          Interests: ["MInimalism" , "Music" , "Code" , "Full Stack Development"
          , "Mobile Application Developement"]
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
          ><span class="Cursor">_</span>
        </p>
      </div>
    </div>
  );
};
export default terminal;

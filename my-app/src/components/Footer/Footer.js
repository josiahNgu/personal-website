import React, { Component } from "react";
import "./Footer.css";
const resumeLink =
  "https://drive.google.com/open?id=10HU5IXSSJLSGV_ukD_qoPgKUXwkY3geo";
const linkedinLink = "https://www.linkedin.com/in/josiahngu";
const gitHubLink = "https://github.com/josiahNgu";
class App extends Component {
  render() {
    return (
      <div className=" container-fluid footer">
        <div />
        <span className="justify-content-start"> &#169; Josiah Ngu 2019</span>
        <span className="d-flex flex-row justify-content-end">
          <a
            className="link"
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            /Resume/
          </a>
          <a
            className="link"
            href="mailto:jos81498@gmail.com?Subject=Hello"
            target="_top"
          >
            Contact/
          </a>
          <a
            className="link"
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin/
          </a>
          <a
            className="link"
            href={gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Git/
          </a>
        </span>
      </div>
    );
  }
}
export default App;

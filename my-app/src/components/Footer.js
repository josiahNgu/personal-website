import React, { Component } from "react";
// import linkedln from'../misc/linkedin.svg';
// import github from '../misc/github.svg';
// import mail from "../misc/envelope.svg";
const resumeLink =
  "https://drive.google.com/open?id=10HU5IXSSJLSGV_ukD_qoPgKUXwkY3geo";
const linkedinLink = "https://www.linkedin.com/in/josiahngu";
const gitHubLink = "https://github.com/josiahNgu";
class App extends Component {
  render() {
    return (
      <div className=" container-fluid footer">
        <div className="d-flex justify-content-center">
          {/* <div className= "col-sm-12 row">
          <div className="col-sm-4"><a target="_blank" href={linkedinLink}>
            <img src={linkedln} alt="linkedin" className="footerIcon" />
            </a>
          </div>
          <div className="col-sm-4"><a target="_blank" href={gitHubLink}>
            <img src={github} alt="github" className="footerIcon" />
            </a>
          </div>
          <div className="col-sm-4"><a href="mailto:jos81498@gmail.com?Subject=Hello" target="_top" >
            <img src={mail} alt="email" className="footerIcon" />
            </a>
          </div>
          </div> */}
        </div>
        <div className="d-flex flex-row justify-content-center">
          <a
            className="link"
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>RESUME</strong>-
          </a>
          <a
            className="link"
            href="mailto:jos81498@gmail.com?Subject=Hello"
            target="_top"
          >
            <strong>CONTACT</strong>-
          </a>
          <a
            className="link"
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>LINKEDIN</strong>-
          </a>
          <a
            className="link"
            href={gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>GITHUB</strong>
          </a>
        </div>
        <div className="d-flex flex-row justify-content-center ">
          <div className="d-flex flex-column justify-content-end">
            <span> &#169; Josiah Ngu 2019</span>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

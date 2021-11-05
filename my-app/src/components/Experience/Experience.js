import React, { Component } from "react";
import AXALogo from "../../misc/AXALogo.png";
import UNLogo from "../../misc/UNL-logo.png";
import SpeedwayLogo from "../../misc/SpeedwayLogo.svg";
import "./Experience.scss";
import Tabs from '../../components/tabs/Tabs';
import { openLinkInNewWindow } from "../../utilities/utilities";

const resumeLink =
  "https://drive.google.com/open?id=10HU5IXSSJLSGV_ukD_qoPgKUXwkY3geo";
const tdStyle = {
  padding: "0px",
};
const workExperience = [{
  title: 'Full Stack Software Developer',
  company: 'United Solutions',
  techStack: '',
  startDate: '',
  endDate: '',
  description: "Created stunning and responsive dashboard with various graphs for data visualization that provide 1000+ users an accessible way to analyze and understand trends, outliers, and pattern in   data.Coordinated adeptly with backend engineer, business analyst,and designer to accurately display over 500, 000 + records of data within tight deadlines."
},
{
  title: 'Full Stack Software Developer',
  company: 'DecentraWorld',
  description: "Created stunning and responsive dashboard with various graphs for data visualization that provide 1000+ users an accessible way to analyze and understand trends, outliers, and pattern in   data.Coordinated adeptly with backend engineer, business analyst,and designer to accurately display over 500, 000 + records of data within tight deadlines."
},
{
  title: 'IOS Developer',
  company: 'Speedway Motors',
  description: "  Work with a group of students as part of the Capstone class by developing an IOS Application using Swift for our sponsor Speedway Motors. The core functionality of the app is the curbside pickup feature. Our team applied software engineering practices by conducting rigorous unit testing and a Scrum software methodology."
},
{
  title: 'React Developer',
  company: 'AXA Affin General Insurance',
  description: "  Working directly with the designer, other developers, and product manager to develop, maintain the front-end of AXA travel insurance Malaysia website promptly and on schedule when bugs or new designs are prompted."
}





];
const experience = () => {
  return (
    <div className=" experience">
      <div className=" container col-lg-10 ">
        <div>
          <h2 className="d-inline">
            <b>/EXPERIENCE</b>
          </h2>
          {/* <button
            href={resumeLink}
            className="default-button"
            onClick={() => openLinkInNewWindow(resumeLink)}
          >
            Download Resume
          </button> */}
        </div>
        <Tabs>
          {
            workExperience.map((item, index) => {
              return (
                <div key={index} label={item.company}>
                  <h5><em>{item.title}</em></h5>
                  <br />
                  <p>{item.description}</p>
                </div>
              )
            })
          }
        </Tabs>
      </div>
    </div>
  );
};

export default experience;

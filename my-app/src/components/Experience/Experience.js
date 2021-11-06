import React from "react";
import { CgFileDocument } from 'react-icons/cg';
import "./Experience.scss";
import Tabs from '../../components/tabs/Tabs';
import { openLinkInNewWindow } from '../../utilities/utilities';
const resumeLink =
  "https://drive.google.com/open?id=10HU5IXSSJLSGV_ukD_qoPgKUXwkY3geo";
const tdStyle = {
  padding: "0px",
};
const workExperience = [{
  title: 'Full Stack Software Developer',
  company: 'United Solutions',
  techStack: 'Angular, TypeORM, Node, AWS, HTML, CSS, Highcharts, Resful API',
  startDate: '',
  endDate: '',
  description: "Created stunning and responsive dashboard with various graphs for data visualization that provide 1000+ users an accessible way to analyze and understand trends, outliers, and pattern in   data.Coordinated adeptly with backend engineer, business analyst,and designer to accurately display over 500,000 + records of data within tight deadlines."
},
{
  title: 'Full Stack Software Developer',
  company: 'DecentraWorld',
  techStack: 'Angular, TypeORM, Node, AWS, HTML, CSS, Highcharts, Restful API',
  description: "Launched a decentralized cryto based website that aggregate sentiment, technical, and fundamental data across the crypto currency ecosystem helping investors make knowledgable decisions. Established partnership with multiple FinTech compaines to obtain their software/API's to integrate onto the platform. Architect and lead the system design effort to create a secure platform and execute the vision using DevSecOps deployable solutions."
},
{
  title: 'IOS Developer',
  company: 'Speedway Motors',
  techStack: 'Swift ZenDeskAPI, Google Map API',
  description: "  Work with a group of students as part of the Capstone class by developing an IOS Application using Swift for our sponsor Speedway Motors. The core functionality of the app is the curbside pickup feature. Our team applied software engineering practices by conducting rigorous unit testing and a Scrum software methodology."
},
{
  title: 'React Developer',
  company: 'AXA Affin General Insurance',
  techStack: 'React, HTML, CSS, Boostrap',
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

        </div>
        <Tabs>
          {
            workExperience.map((item, index) => {
              return (
                <div key={index} label={item.company} >
                  <h5><em>{item.title}</em></h5>
                  <p className="my-2 slate-color">{item.techStack}</p>
                  <p>{item.description}</p>
                </div>
              )
            })
          }
        </Tabs>
        {/* <button
          href={resumeLink}
          onClick={() => openLinkInNewWindow(resumeLink)}
        >
          <CgFileDocument /> Download Resume
          </button> */}
      </div>
    </div >
  );
};

export default experience;

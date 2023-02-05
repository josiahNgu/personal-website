import React from "react";
import "./Experience.scss";
import Tabs from "../../components/tabs/Tabs";

const workExperience = [
  {
    title: "Software Engineer",
    company: "WeWork",
    techStack:
      "React, Ruby on Rails, Node, Express.js, Kubernetes, Docker, APM",
    startDate: "April 4, 2022",
    endDate: "current",
    description:
      "Reduced Percy's snapshot count uploaded to BrowserStack by 70%, resulting in cost savings of $300,000 per annum through optimization of testing processes and implementation of more efficient snapshot management techniques. Also, deployed API using Docker and Kubernetes, ensuring high availability and scalability of the application.",
  },
  {
    title: "Full Stack Software Developer",
    company: "United Solutions",
    techStack: "Angular, TypeORM, Node, AWS, HTML, CSS, Highcharts, Resful API",
    startDate: "October 4, 2020",
    endDate: "March 31, 2022",
    description:
      "Created stunning and responsive dashboards with various graphs for data visualization that provide 1000+ users an accessible way to analyze and understand trends, outliers, and patterns in data. Coordinated adeptly with backend engineer, business analyst, and designer to accurately display over 500,000 + records of data within tight deadlines.",
  },
  {
    title: "Full Stack Software Developer",
    company: "DecentraWorld",
    techStack:
      "Angular, TypeORM, Node, AWS, HTML, CSS, Highcharts, Restful API",
    description:
      "Launched a decentralized cryto based website that aggregate sentiment, technical, and fundamental data across the crypto currency ecosystem helping investors make knowledgable decisions. Established partnership with multiple FinTech compaines to obtain their software/API's to integrate onto the platform. Architect and lead the system design effort to create a secure platform and execute the vision using DevSecOps deployable solutions.",
  },
  {
    title: "IOS Developer",
    company: "Speedway Motors",
    techStack: "Swift ZenDeskAPI, Google Map API",
    description:
      "Work with a group of students as part of the Capstone class by developing an IOS Application using Swift for our sponsor Speedway Motors. The core functionality of the app is the curbside pickup feature. Our team applied software engineering practices by conducting rigorous unit testing and a Scrum software methodology.",
  },
  {
    title: "React Developer",
    company: "AXA Affin General Insurance",
    techStack: "React, HTML, CSS, Boostrap",
    description:
      "Working directly with the designer, other developers, and product manager to develop, and maintain the front-end of the AXA travel insurance Malaysia website promptly and on schedule when bugs or new designs are prompted.",
  },
];
const experience = () => {
  return (
    <div className="experience">
      <div className=" container col-lg-10 ">
        <div>
          <h2 className="d-inline alternate-color">
            <b>/EXPERIENCE</b>
          </h2>
        </div>
        <Tabs>
          {workExperience.map((item, index) => {
            return (
              <div key={index} label={item.company}>
                <h5>
                  <em>{item.title}</em>
                </h5>
                <p className="my-2 slate-color">{item.techStack}</p>
                <p>{item.description}</p>
              </div>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default experience;

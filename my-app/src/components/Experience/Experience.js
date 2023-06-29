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
    description: `I played a pivotal role in improving and implementing new features for Spacestation, a community management platform, functionality for the over 500,000 members who rely on it worldwide. My work included developing and implementing new features and serving as a technical lead for designing an event-driven process that keeps over 10 million records up-to-date. I also created reusable frontend notification components that were used throughout the organization. In addition, I streamlined our company-wide test snapshots usage, resulting in significant cost savings. To ensure high availability, I leveraged Docker and Kubernetes to deploy micro-services and integrated monitoring and alerting tools like Prometheus and Rollbar. All of these efforts led to a 99.99% uptime rate, making Spacestation a reliable platform for managing moves, events, bookings, and other tasks.
    `,
  },
  {
    title: "Full Stack Software Developer",
    company: "United Solutions",
    techStack: "Angular, TypeORM, Node, AWS, HTML, CSS, Highcharts, Resful API",
    startDate: "October 4, 2020",
    endDate: "March 31, 2022",
    description:
      "Through my work, I was able to provide valuable insights to users through interactive dashboards and graphs. These tools allowed for the analysis of patterns, trends, and anomalies, which resulted in significant procurement strategy savings of over $50 million. I collaborated with Project Managers to identify and resolve important issues, and worked with Data Scientists to develop an automated system that improved data accuracy and efficiency. As part of this effort, I managed over 35 RESTful APIs in Node.js, which facilitated client-side communication for a range of functions, including user authentication/management, file uploading, JSON/form-data submission/retrieval, and database querying.",
  },
  {
    title: "Full Stack Software Developer",
    company: "DecentraWorld",
    techStack:
      "Angular, TypeORM, Node, AWS, HTML, CSS, Highcharts, Restful API",
    description:
      "Developed a comprehensive website that is dedicated to collecting and analyzing various types of data pertaining to cryptocurrency. By leveraging sentiment, technical, and fundamental information, my platform is designed to empower investors with the insights they need to make informed decisions in the cryptocurrency market. To further enhance the capabilities of my website, I have partnered with TradingView to integrate their powerful software and APIs into my platform. With these robust tools at their disposal, users can confidently navigate the complexities of the cryptocurrency landscape and stay ahead of the curve",
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

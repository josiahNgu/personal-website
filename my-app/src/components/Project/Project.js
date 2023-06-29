/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { MdOutlineFolderOpen, MdOpenInBrowser } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";

import "./Project.scss";
import { openLinkInNewWindow } from "../../utilities/utilities";
const GithubLink = "https://github.com/josiahNgu";
const projectDetails = [
  {
    title: "DeadlineDasher",
    description:
      "Are you struggling to stay focused on your tasks? Then this app might be exactly what you need. It uses the Pomodoro technique to help you get things done, inspired by the need to solve leet code questions for interviews. The app has a clean and intuitive interface, making it easy to use and navigate. All you have to do is input your task and set the timer for around 25 minutes. The app will block out any distractions during this time, allowing you to focus on your task completely. Once the timer is up, take a short break before starting the next Pomodoro session.",
    repoLink: "https://github.com/josiahNgu/deadlinedasher",
    liveLink: "https://deadlinedasher.life/",
    techStack: "ReactJS, Firebase, NodeJS, ExpressJS, Google GCP Functions",
  },
  {
    title: "BoominStudio",
    description:
      "Started as a software as a service that sells fresh produce from local farms to the consumer. The project took a new turn and headed toward a new direction after some careful refinement. Today, it has become a fashion e-commerce platform to showcase my passion for fashion design. It was developed in React with Redux to assist myself obtain a solid understanding of React and Redux full-stack software development.",
    repoLink: "https://github.com/josiahNgu/BusinessBoomin",
    liveLink: "https://businessboomin.dev/",
    techStack: "ReactJS, tailwind, HTML/CSS",
  },
  {
    title: "Concert Ticket Purchasing Application",
    description:
      "The goal of this project is to gain a deeper understanding of MVC and OOP software development. The project is a web application that allows users to buy tickets to a concert at various locations around the country. The technology that was focused on was session control, CRUD operations, and asynchronous HTTP communication using AJAX and web security.",
    repoLink:
      "https://github.com/josiahNgu/BootlegTwitter-And-ConcertWebApp/tree/hw3",
    liveLink: "",
    techStack: "JAVA, MySQL, HTML/CSS, AJAX, Boostrap, EJS",
  },
  {
    title: "Bird",
    description:
      "This project is intended to familiarize me with the MEAN Stack and Single Page Application (SPA). It was a clone of the Twitter app. The app involved heavy CRUD operations such as deleting a post, updating user profiles, adding comments to a post with the ability to tag other users, notifications, and creating posts.",
    repoLink:
      "https://github.com/josiahNgu/BootlegTwitter-And-ConcertWebApp/tree/bootlegTwitter",
    liveLink: "",
    techStack: "AngularJS,MongoDB, NodeJS, ExpressJS, Javscript, HTML, CSS",
  },
  {
    title: "Thiner",
    description:
      "Thiner is an application that takes a long URL and turns it into a short and easily memorable word. After creating a magic URL, the user can easily share it with their peers and friends where the app will redirect the user to the original link when they use the magic URL. This project involved heavily System Design skills to make a scalable app.",
    repoLink: "https://github.com/josiahNgu/Thiner",
    liveLink: "",
    techStack:
      "MongoDB, ExpressJS, NodeJS, HTML, CSS, JavaScript, Python, AWS Lamda",
  },
];
const project = () => {
  return (
    <div>
      <div className="container col-10">
        <div>
          <h2 className="d-inline alternate-color">
            <b>/EXHIBITION </b>
          </h2>
        </div>
        <div className="row mt-3">
          {projectDetails.map((item, index) => {
            return (
              <div className="col-12 col-md-6 mb-3 card" key={{ index }}>
                <div className="d-flex">
                  <MdOutlineFolderOpen className="mr-auto icon-size alternate-color" />
                  <GoMarkGithub
                    className="cursor-pointer"
                    style={{ fontSize: "1.6rem" }}
                    onClick={() => openLinkInNewWindow(item.repoLink)}
                  />
                  {item.liveLink.length > 0 ? (
                    <MdOpenInBrowser
                      className="icon-size cursor-pointer ml-2"
                      onClick={() => openLinkInNewWindow(item.liveLink)}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <h6 className="mt-3 slate-color">{item.techStack}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default project;

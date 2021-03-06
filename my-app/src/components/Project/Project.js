/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Project.scss";
import { openLinkInNewWindow } from "../../utilities/utilities";
const GithubLink = "https://github.com/josiahNgu";
const project = () => {
  return (
    <div className="Project">
      <div className="container col-10 ">
        <div className="text-center">
          <h4>
            <b>Projects</b>
          </h4>
          <button
            className="default-button"
            onClick={() => openLinkInNewWindow(GithubLink)}
          >
            GITHUB
          </button>
        </div>
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <b>Speedway Motors</b>
              </h5>
              <p className="card-text">
                A group project for our senior design capstone class partnering
                with our amazing sponsor "Speedway Motors" to create an IOS
                application to help with their customer loyalty, brand
                recognition, marketing strategy. We built the curbside pickup
                feature from scratch to facilitate the process of picking up an
                order by the customer, and implemented live chat, faq, and
                homepage.
              </p>
            </div>
            <div className="card-footer">
              <p>
                <small>Technologies: Swift, Zendesk API, GoogleMaps API </small>
                <br />
              </p>
            </div>
            <button
              className="default-button repo-button"
              onClick={() => openLinkInNewWindow(GithubLink)}
            >
              Repo
            </button>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <b>Social Media Single Page Application</b>
              </h5>
              <p className="card-text">
                This project is intended to familiarize with the single page web
                application development using MEAN stack. The goal of this
                project is to create a social feed where a user has the ability
                submit new posts to their feeds, post replies to those posts or
                other posts on their feeds, favorite posts on other users’ feed,
                and share posts from other users on their own feed. They may
                also edit or delete any posts of their own, but not of other
                users
              </p>
            </div>
            <div className="card-footer">
              <p>
                <small>
                  Technologies: MongoDB, ExpressJS, AngularJS, NodeJS, Javasript
                </small>
                <br />
              </p>
            </div>
            <button
              className="default-button repo-button"
              onClick={() =>
                openLinkInNewWindow(
                  "https://github.com/josiahNgu/BootlegTwitter-And-ConcertWebApp"
                )
              }
            >
              Repo
            </button>
          </div>
        </div>
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <b>Concert Venue Ticket Purchasing Application</b>
              </h5>
              <p className="card-text">
                The goal of this project is to create an MVC-based application
                with static HTML design an d the use of JSP for the
                presentation, and java servlet for the business logic. This
                project also focuses on maintaining state in user applications,
                session control, transaction functionality, and interaction with
                databases, making asynchronous HTTP communication using AJAX,
                and implement fundamental web application security.
              </p>
            </div>
            <div className="card-footer">
              <p>
                <small>
                  Technologies: JAVA, MYSQL, HTML/CSS, AJAX, Bootstrap
                </small>
                <br />
              </p>
            </div>
            <button
              className="default-button repo-button"
              onClick={() =>
                openLinkInNewWindow(
                  "https://github.com/josiahNgu/BootlegTwitter-And-ConcertWebApp"
                )
              }
            >
              Repo
            </button>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <b>SEO Inventory</b>
              </h5>
              <p className="card-text">
                This project is a fashion e-commerce website developed in React
                to help understand and obtained a solid understanding of React
                and Redux full stack software development
              </p>
            </div>
            <div className="card-footer">
              <p>
                <small>
                  Technologies: MongoDB, ExpressJS, AngularJS, NodeJS,
                  Javascript
                </small>
                <br />
              </p>
            </div>
            <button
              className="default-button repo-button"
              onClick={() =>
                openLinkInNewWindow("https://github.com/josiahNgu/FreshBox")
              }
            >
              Repo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default project;

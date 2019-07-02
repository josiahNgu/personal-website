/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Project.css";
const GithubLink = "https://github.com/josiahNgu";

const style = {
  backgroundColor: "#ccc",
  color: "black",
  borderColor: "white"
};
const project = () => {
  return (
    <div className="Project">
      <div className="container ">
        <div className="text-center">
          <h4>
            <b>Projects</b>
          </h4>
          <a
            href={GithubLink}
            className="CustomButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <hr />

        <div className="card-group">
          <div className="card">
            <div className="card-body" style={style}>
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
          </div>
          <div className="card">
            <div className="card-body" style={style}>
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
          </div>
        </div>
        <div className="card-group">
          <div className="card">
            <div className="card-body" style={style}>
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
          </div>
          <div className="card">
            <div className="card-body" style={style}>
              <h5 className="card-title">
                <b>SEO Inventory</b>
              </h5>
              <p className="card-text">
                This project is intended to use the software lifecycles
                methodologies we learned in class to develop our Inventory app
                where user can keep track of the items in their inventory by
                different categories. The app will warn the user when the supply
                is running low for any of the items. We also practice the agile
                methodology by managing our application using Scrum.
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default project;

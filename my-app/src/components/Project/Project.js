/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Project.css";
import image from "../../misc/bicycle.png";
const project = () => {
  return (
    <div className="Project">
      <div className="container">
        <div className="card">
          <img className=" card-img-top " src={image} />
          <div className="card-body">
            <h5 className="card-title">
              <b>Speedway Motors</b>
            </h5>
            <p className="card-text">
              A group project for our senior design capstone class partnering
              with our amazing sponsor Speedway Motors to create an IOS
              application to help with their customer loyalty and brand
              recognition.
            </p>
            <p className="card-text">
              <small>technology: Swift </small> <br />
              <small>2019 </small>
            </p>
          </div>
        </div>
        <div className="card">
          <img className=" card-img-top " src={image} />
          <div className="card-body">
            <h5 className="card-title">
              <b>Social Media Single Page Application</b>
            </h5>
            <p className="card-text">
              This project is intended to familiarize with the web application
              development using the <b>MEAN</b> stack.
            </p>
          </div>
          <div className="card-footer">
            <p>
              <small>
                technology: MongoDB, ExpressJS, AngularJS, NodeJS, Javasript,
                HTML/CSS
              </small>
              <br />
              <small>2019</small>
            </p>
          </div>
        </div>
        <div className="card-group">
          <div className="card">
            <img className=" card-img-top " src={image} />
            <div className="card-body">
              <h5 className="card-title">
                <b>Social Media Single Page Application</b>
              </h5>
              <p className="card-text">
                This project is intended to familiarize with the web application
                development using the <b>MEAN</b> stack.
              </p>
            </div>
            <div className="card-footer">
              <p>
                <small>
                  technology: MongoDB, ExpressJS, AngularJS, NodeJS, Javasript,
                  HTML/CSS
                </small>
                <br />
                <small>2019</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img className=" card-img-top " src={image} />
            <div className="card-body">
              <h5 className="card-title">
                <b>Concert Venue Ticket Purchasing Application</b>
              </h5>
              <p className="card-text">
                This goal of this project is to create an MVC-based application
                with static HTMl design and the use of jsp for the presentation
                and java servlet for the business logic. This project also
                includes maintaing state in user applications, with a focus on
                session control, transaction functionality and interaction with
                databases, making asynchronous HTTP communication using AJAX,
                and implement fundamental web application security
              </p>
            </div>
            <div className="card-footer">
              <p>
                <small>technology: JAVA, MYSQL, HTML/CSS, AJAX </small>
                <br />
                <small>2019</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default project;

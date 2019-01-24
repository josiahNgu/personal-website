import React, { Component } from 'react';
import AXALogo from '../misc/AXALogo.png';

class Experience extends Component {
  render() {
    return (
      <div className="container experience">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
        <div>
          <h3>Experience</h3>
          <hr></hr>
        </div>
        <div >
          <td className="col-lg-6"><h5>AXA Affin General Insurance</h5></td>
          <td className="col-lg-6"><img className="center logo" src={AXALogo} alt="AXA Logo"/></td>
          <h6>Web Developer, Digital Team</h6>
          <h6>Kuala Lumpur, Malaysia (Summer 2018)</h6>
          <ul>
            <li>- Helped developed front-end of AXA travel insurance Malaysia website using ReactJS </li>
            <li>- Worked on back-end using NextJS and ReduxJS </li>
            <li>- Maintained website by fixing bugs and performance issues</li>
            <button type="button" className="btn btn-dark">
              Click here to visit the website
            </button>
          </ul>
        </div>

        <div className="newExperience">
        <h5>Plus Intralink Sdn Bhd</h5>
          <h6>IT Assistant, IT Department</h6>
          <h6>Sarawak, Malaysia (Summer 2016)</h6>
          <ul>
            <li>- Inspected and configured computer before deployment to client</li>
            <li>- Provided excellent customer service by satisfying the client’s needs
               for every new computer to run correctly on the client’s site </li>
            <li>- Make sure the client received the latest company software update on every new release</li>
            </ul>
        </div>
        </div>
      </div>
    );
    }
  }

export default Experience;
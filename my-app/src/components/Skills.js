import React from 'react';
import '../style/App.css';
import {Line} from 'rc-progress';
class Skills extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center skill container-fluid ">
        <div className="row col-md-10 col-xs-12">
          <div className="col-md-6 col-xs-12">
            <p>Java</p>
            <Line
            percent="75"
            strokeWidth="1"
            strokeColor="#766F57"
            strokeLinecap="square"
            trailColor="#DDDDDD"
            />
          </div>
          <div className="col-md-6 col-xs-12">
              <p>JS/HTML5/Bootstrap/CSS</p>
              <Line
              percent="70"
              strokeWidth="1"
              strokeColor="#D5AE41"
              strokeLinecap="square"
              />
          </div>
          <div className="col-md-6 col-xs-12">
            <p>C/C++</p>
            <Line
            percent="50"
            strokeWidth="1"
            strokeColor="#D5AE41"
            strokeLinecap="square"
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <p>Unix/Linux</p>
            <Line
            percent="70"
            strokeWidth="1"
            strokeColor="#766F57"
            strokeLinecap="square"
          />
          </div>
          <div className="col-md-6 col-xs-12">
            <p>MySQL</p>
              <Line
              percent="60"
              strokeWidth="1"
              strokeColor="#766F57"
              strokeLinecap="square"
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <p>NodeJS</p>
              <Line
              percent="40"
              strokeWidth="1"
              strokeColor="#D5AE41"
              strokeLinecap="square"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;


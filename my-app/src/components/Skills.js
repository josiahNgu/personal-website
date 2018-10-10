import React from 'react';
import '../style/App.css';
import {Line} from 'rc-progress';

class Skills extends React.Component {
  render() {
    return (
      <div className="skill">
          <h3 className="d-flex justify-content-center">Toolbox</h3>
        <div className="d-flex justify-content-center   container-fluid ">
          <div className="row col-sm-8">
            <div className="col-sm-6">
              <p>Java</p>
              <Line
              percent="75"
              strokeWidth="1"
              strokeColor="#766F57"
              strokeLinecap="square"
              trailColor="#DDDDDD"
              />
            </div>
            <div className="col-sm-6">
                <p>HTML5/Bootstrap</p>
                <Line
                percent="70"
                strokeWidth="1"
                strokeColor="#D5AE41"
                strokeLinecap="square"
                />
            </div>
            <div className="col-sm-6">
              <p>C/C++</p>
              <Line
              percent="50"
              strokeWidth="1"
              strokeColor="#D5AE41"
              strokeLinecap="square"
              />
            </div>
            <div className="col-sm-6">
              <p>Unix/Linux</p>
              <Line
              percent="70"
              strokeWidth="1"
              strokeColor="#766F57"
              strokeLinecap="square"
            />
            </div>
            <div className="col-sm-6">
              <p>MySQL</p>
                <Line
                percent="60"
                strokeWidth="1"
                strokeColor="#766F57"
                strokeLinecap="square"
              />
            </div>
            <div className="col-sm-6">
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
      </div>
    );
  }
}
export default Skills;


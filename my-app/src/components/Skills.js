import React from 'react';
import '../style/App.css';
import {Line} from 'rc-progress';
import progressBar from 'react-progressbar.js';

class Skills extends React.Component {
  render() {
    return (
      <div className="skill  container-fluid col-md-8">
        <div className="row">
          <div className="col-md-6">
            <p>Java</p>
            <Line
            percent="75"
            strokeWidth="1"
            strokeColor="#BDD7FF"
            strokeLinecap="square"
            trailColor="#DDDDDD"
            />
          </div>
          <div className="col-md-6">
              <p>HTML5/Bootstrap</p>
              <Line
              percent="70"
              strokeWidth="1"
              strokeColor="#800080"
              strokeLinecap="square"
              />
          </div>
          <div className="col-md-6">
            <p>C/C++</p>
            <Line
            percent="50"
            strokeWidth="1"
            strokeColor="#800080"
            strokeLinecap="square"
            />
          </div>
          <div className="col-md-6">
            <p>Unix/Linux</p>
            <Line
            percent="70"
            strokeWidth="1"
            strokeColor="#BDD7FF"
            strokeLinecap="square"
          />
          </div>
          <div className="col-md-6">
            <p>MySQL</p>
              <Line
              percent="60"
              strokeWidth="1"
              strokeColor="#BDD7FF"
              strokeLinecap="square"
            />
          </div>
          <div className="col-md-6">
            <p>NodeJS</p>
              <Line
              percent="40"
              strokeWidth="1"
              strokeColor="#800080"
              strokeLinecap="square"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;


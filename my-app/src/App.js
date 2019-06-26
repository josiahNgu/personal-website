import React, { Component } from "react";
import ReactGA from "react-ga";
import Body from "./components/Body";
import "./style/App.css";

function initializeReactGA() {
  ReactGA.initialize("UA-132332864-1");
  ReactGA.pageview("/homepage");
}

class App extends Component {
  componentDidMount() {
    initializeReactGA();
    // eslint-disable-next-line no-undef
    document.title = "Josiah Ngu";
  }
  render() {
    return <Body />;
  }
}

export default App;

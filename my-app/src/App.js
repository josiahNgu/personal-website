import React, { Component } from "react";
import ReactGA from "react-ga";
import Body from "./components/Body";
import { Route, withRouter, Switch } from "react-router-dom";
import "./style/App.css";
import Experience from "./components/Experience/Experience";

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
    const routes = (
      <Switch>
        <Route path="/" exact component={Body} />
        <Route path="/experiences" component={Experience} />
      </Switch>
    );
    return <div>{routes}</div>;
  }
}

export default withRouter(App);

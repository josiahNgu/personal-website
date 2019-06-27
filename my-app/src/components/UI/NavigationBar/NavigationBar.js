import React from "react";
import "./NavigationBar.css";
import Scrollspy from "react-scrollspy";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand
} from "reactstrap";
export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Scrollspy items={["resume", "experience", "aboutMe"]}>
        <Navbar className="NavigationBar" light expand="md">
          <NavbarBrand href="/">Josiah Ngu</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#resume">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#experience">Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#project">Project</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Scrollspy>
    );
  }
}

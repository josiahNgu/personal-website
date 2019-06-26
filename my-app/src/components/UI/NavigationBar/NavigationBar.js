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
const resumeLink =
  "https://drive.google.com/open?id=10HU5IXSSJLSGV_ukD_qoPgKUXwkY3geo";
const linkedinLink = "https://www.linkedin.com/in/josiahngu";
const githubLink = "https://github.com/josiahNgu";
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
        <Navbar light className="Light" expand="md">
          <NavbarToggler onClick={this.toggle} className="ml-auto" />
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

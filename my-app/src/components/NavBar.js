import React from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import '../style/App.css';
const resumeLink = "https://drive.google.com/open?id=10HU5IXSSJLSGV_ukD_qoPgKUXwkY3geo";
const linkedinLink = "https://www.linkedin.com/in/josiahngu";
const githubLink = "https://github.com/josiahNgu";

export default class NavBar extends React.Component {
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
      <Navbar light expand="md" >
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} ml-auto navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink active href={resumeLink} target="_blank">Resume</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={linkedinLink} active target="_blank">Linkedin</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={githubLink} active target="_blank">Github</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
);
}
}

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
const resumeLink = "https://drive.google.com/open?id=10HU5IXSSJLSGV_ukD_qoPgKUXwkY3geo";


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
      <div>
        <Navbar color="red" light expand="md">
          <NavbarBrand href="/">AUGUST</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">-Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">-About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">-Skill</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">-Footer</NavLink>
              </NavItem>
              <NavItem>
              <Button outline color="danger" target="_blank" href={resumeLink} >Resume</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
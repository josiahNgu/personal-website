import React from 'react';
import {
  Button,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  } from 'reactstrap';
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
      <div id ="spy" className="fixed-top">
        <Navbar color="red" light expand="md" >
          <NavbarBrand href="/">AUGUST</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <Button outline color="danger" target="_blank" href={resumeLink} >Resume</Button>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}
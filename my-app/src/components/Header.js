import React from 'react';
import {Button, Nav, NavItem,NavLink,Navbar} from 'reactstrap';
 class Header extends React.Component {

  render() {
    return (
      <div className="float-right">
        <Navbar>
          <Nav>
          <NavItem><NavLink href="#">Home</NavLink></NavItem>
          <NavItem><NavLink href="#">Resume</NavLink></NavItem>
          <NavItem><NavLink href="#">Shop</NavLink></NavItem>
          <NavItem><NavLink href="#">Contact</NavLink></NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Header;
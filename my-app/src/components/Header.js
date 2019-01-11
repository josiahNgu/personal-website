import React from 'react';
// import {Button, Nav, NavItem,NavLink,Navbar} from 'reactstrap';
 class Header extends React.Component {

  render() {
    return (
      <div>
        <nav className="navbar">
        <a className="navbar-brand" href="#">WakiramasenG</a>
          <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link">Home</a>
          </li>
          <li className="nav-item">
          <a className="nav-link">About Me</a>
          </li>
          </ul>
          </nav>
      </div>
    );
  }
}
export default Header;
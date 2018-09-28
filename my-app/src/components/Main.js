import React from 'react';
import {Button, Nav, NavItem,NavLink,Navbar,NavbarBrand} from 'reactstrap';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import MainImage from '../misc/brooklynLandscape.JPG';

 class Main extends React.Component {

  render() {
    return (
      <ParallaxProvider>
        <Parallax
          slowerScrollRate
          tag="figure"
        >
        <img width="100%" src ={MainImage}/>
        </Parallax>
      </ParallaxProvider>
    );
  }
}
export default Main;
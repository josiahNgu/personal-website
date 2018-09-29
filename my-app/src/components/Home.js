import React from 'react';
import {Button, Nav, NavItem,NavLink,Navbar,NavbarBrand} from 'reactstrap';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import TypeWriterText from './TypeWriterText.js';
import MainImage from '../misc/brooklynLandscape.JPG';

 class Main extends React.Component {

  render() {
    return (
      <div>
        <div className="position-absolute">
          <ParallaxProvider>
            <Parallax
              slowerScrollRate
              tag="figure"
            >
            <img width="100%" src ={MainImage}/>
            </Parallax>
          </ParallaxProvider>
        </div>
        <div className="position-relative">
          <TypeWriterText/>
        </div>
      </div>
    );
  }
}
export default Main;
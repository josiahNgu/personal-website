import React from "react";
import { RiMailUnreadFill } from 'react-icons/ri';
import { IoInfinite } from 'react-icons/io5';
import "./LandingPage.scss";
const LandingPage = () => {
  return (
    <div className="container">
      <div className="introduction">
        <h1 className="title">hi, <span className="alternate-color font-weight-bold">Josiah</span> here. <span className="cursor-blinking">|</span></h1>
        <h2 className='subheading slate-color'>Stuck in an infinite loop. <IoInfinite className='alternate-color' /></h2>
        <p className="summary my-3 slate-color">
          I'm a software engineer based in Maryland. I have profound interest in data visualization, full stack development, cyber security and everything tech related.
          </p>
      </div>
      <button className="my-3 default-button"><RiMailUnreadFill className='mr-2' />Holla</button>
    </div >
  );
};
export default LandingPage;

import React, { useState, useEffect } from "react";
import "./LandingPage.scss";
import { RiMailUnreadFill } from 'react-icons/ri';
import { IoInfinite } from 'react-icons/io5';
// import Logo from "../../assets/logo.svg";

const randomNumberGenerator = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}

const LandingPage = () => {
  const differentLanguages = ['¡Hola!', 'أهلا', 'hello', '你好'];
  const [buttonText, setButtonText] = useState('hello');
  useEffect(() => {
    const intervalId = setInterval(() => {
      setButtonText(differentLanguages[randomNumberGenerator(0, differentLanguages.length - 1)])
    }, 3000);
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="container d-flex align-items-center flex-column h-100 justify-content-center">
      {/* <Logo /> */}
      <div className="introduction">
        <h1 className="title" >hi, <span className="alternate-color font-weight-bold"> Josiah </span> here. <span className="cursor-blinking">|</span></h1>
        <h2 className='subheading slate-color'>Stuck in an recursion loop. <IoInfinite className='alternate-color' /></h2>
        <p className="summary my-3 slate-color">
          I'm a software engineer based in Maryland. I have profound interest in data visualization, full stack development, cyber security and everything tech related.
          </p>
      </div>
      <button className="my-3 default-button"><RiMailUnreadFill className='mr-2' />{buttonText}</button>
    </div >
  );
};
export default LandingPage;

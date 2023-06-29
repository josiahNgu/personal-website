import React, { useState, useEffect } from "react";
import "./LandingPage.scss";
import { RiMailUnreadFill } from "react-icons/ri";
import { resumeLink } from "../UI/SideBarNav/SideBarNav";
// import Logo from "../../assets/logo.svg";

const randomNumberGenerator = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

const LandingPage = () => {
  const differentLanguages = ["¡Hola!", "أهلا", "hello", "你好"];
  const [buttonText, setButtonText] = useState("hello");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setButtonText(
        differentLanguages[
          randomNumberGenerator(0, differentLanguages.length - 1)
        ]
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container d-flex align-items-center flex-column h-100 justify-content-center">
      {/* <Logo /> */}
      <div className="introduction">
        <h1 className="title">
          hi, <span className="alternate-color font-weight-bold"> Josiah </span>{" "}
          here. <span className="cursor-blinking">|</span>
        </h1>
        <h2 className="subheading slate-color">
          Looking for a full stack software engineer?
        </h2>
        <p className="summary my-3 slate-color">
          Enthusiastic full stack software engineer with a knack for thinking
          outside the box. My aim is to shake things up and find new and
          exciting solutions. Attached my{" "}
          <a href={resumeLink} target="_blank" rel="noreferrer noopener">
            resume
          </a>{" "}
          here just in case it piques your interest.
        </p>
      </div>
      <button className="my-3 default-button">
        <RiMailUnreadFill className="mr-2" />
        {buttonText}
      </button>
    </div>
  );
};
export default LandingPage;

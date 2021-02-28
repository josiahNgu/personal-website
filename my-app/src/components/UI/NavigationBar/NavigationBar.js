import React, { useState, useEffect } from "react";
import "./NavigationBar.scss";
import Scrollspy from "react-scrollspy";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { MenuItem } from "./MenuItem";

const menuItems = [
  {
    name: "resume",
    className: "resume-link nav-link",
  },
  {
    name: "experience",
    className: "resume-link nav-link",
  },
  {
    name: "projects",
    className: "resume-link nav-link",
  },
  {
    name: "Github",
    className: "resume-link nav-link",
  },
  {
    name: "Contact",
    className: "resume-link nav-link",
  },
];
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 99% 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 99% 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 40,
      damping: 40,
    },
  },
};
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const NavigationBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [hideMenu, setHideMenu] = useState(false);
  useEffect(() => {
    console.log("window.innerHeight :>> ", window.innerHeight);
    if (window.innerWidth < 1200) setHideMenu(true);
    function handleResize() {
      const { innerWidth: width, innerHeight: height } = window;
      width > 1200 ? setHideMenu(false) : setHideMenu(true);
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log("hideMenu :>> ", hideMenu);
  function toggle() {
    setOpenMenu(!openMenu);
    console.log("openMenu :>> ", openMenu);
  }

  return (
    <React.Fragment>
      {!hideMenu ? (
        <nav className="navigation-bar">
          <h1 className="navbar-logo">JOSIAH</h1>
          <div className="menu-icon" onClick={toggle}>
            <i className={openMenu ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className="desktop-nav-list">
            {menuItems.map((item, index) => {
              return (
                <li className="nav-link" key={index}>
                  <a href={`#${item.name}`} className={item.className}>
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : (
        <motion.nav
          className="motion-nav-bar"
          initial={false}
          animate={openMenu ? "open" : "closed"}
        >
          {/* <motion.div className="background" variants={sidebar} /> */}
          {openMenu ? (
            <React.Fragment>
              <motion.div className="background" variants={sidebar} />
              <motion.ul className="nav-list" variants={variants}>
                {menuItems.map((i) => (
                  <MenuItem i={i} key={i} />
                ))}
              </motion.ul>
            </React.Fragment>
          ) : null}
          <MenuToggle className="" toggle={() => toggle()} />
        </motion.nav>
      )}
    </React.Fragment>
  );
};

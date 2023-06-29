import React from "react";
import "./SideBarNav.scss";
import { GoMarkGithub } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io";
import { MdOpenInBrowser } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { openLinkInNewWindow } from "../../../utilities/utilities";

export const githubLink = "https://github.com/josiahNgu";
export const linkedinLink = "https://www.linkedin.com/in/josiahngu/";
export const decentraworldLink = "https://www.decentraworld.trade/chart";
export const resumeLink =
  "https://drive.google.com/open?id=10HU5IXSSJLSGV_ukD_qoPgKUXwkY3geo";
const SideBarNav = () => {
  const navigationLinks = [
    {
      link: "home",
      name: "/home",
    },
    {
      link: "about",
      name: "/about",
    },
    {
      link: "experience",
      name: "/experience",
    },
    {
      link: "exhibition",
      name: "/exhibition",
    },
  ];

  return (
    <div className="navigation">
      {navigationLinks.map((item, index) => {
        return (
          <a
            className="d-block font-weight-bold"
            href={`#${item.link}`}
            key={index}
          >
            <b>{item.name}</b>
          </a>
        );
      })}
      <GoMarkGithub
        className="mr-2"
        style={{ fontSize: "1.3rem", cursor: "pointer" }}
        onClick={() => openLinkInNewWindow(githubLink)}
      />
      <IoLogoLinkedin
        className="mr-2"
        style={{ fontSize: "1.3rem", cursor: "pointer" }}
        onClick={() => openLinkInNewWindow(linkedinLink)}
      />
      <MdOpenInBrowser
        className="mr-2"
        style={{ fontSize: "1.3rem", cursor: "pointer" }}
        onClick={() => openLinkInNewWindow(decentraworldLink)}
      />
      <CgFileDocument
        style={{ fontSize: "1.3rem", cursor: "pointer" }}
        onClick={() => openLinkInNewWindow(resumeLink)}
      />
    </div>
  );
};

export default SideBarNav;

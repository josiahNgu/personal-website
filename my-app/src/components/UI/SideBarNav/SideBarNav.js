import React from "react";
import "./SideBarNav.scss";
import { GoMarkGithub } from 'react-icons/go'
import { IoLogoLinkedin } from 'react-icons/io'
import { BiLinkExternal } from 'react-icons/bi'
const SideBarNav = () => {
    const navigationLinks = [
        {
            link: 'home',
            name: '/home'
        },
        {
            link: 'about',
            name: '/about'
        },
        {
            link: 'experience',
            name: '/experience'
        },
        {
            link: 'exhibition',
            name: '/exhibition'
        },
    ]
    return (
        <div className="navigation">
            {
                navigationLinks.map((item, index) => {
                    return (
                        <a className="d-block font-weight-bold" href={`#${item.link}`} key={index}>
                            {item.name}
                        </a>
                    )
                })
            }
            <GoMarkGithub className="mr-2" style={{ fontSize: "1.3rem", cursor: 'pointer' }} />
            <IoLogoLinkedin className="mr-2" style={{ fontSize: "1.3rem", cursor: 'pointer' }} />
            <BiLinkExternal style={{ fontSize: "1.3rem", cursor: 'pointer' }} />
        </div>
    )

};

export default SideBarNav;
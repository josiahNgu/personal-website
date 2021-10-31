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
                navigationLinks.map(item => {
                    return (
                        <a className="d-block font-weight-bold" href={`#${item.link}`}>
                            {item.name}
                        </a>
                    )
                })
            }
            <GoMarkGithub className="mr-2" style={{ fontSize: "1rem " }} />
            <IoLogoLinkedin className="mr-2" />
            <BiLinkExternal />
        </div>
    )

};

export default SideBarNav;
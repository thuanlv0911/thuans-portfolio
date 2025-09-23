import React, { useState } from 'react';
import { RiMenuFill, RiMenuFold2Fill } from "react-icons/ri";
import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { TbCertificate } from "react-icons/tb";
import { BsDiagram3 } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Nav = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div className="mobile-nav">
                <div className="mobile-nav-header">
                    {open ? (
                        <RiMenuFold2Fill size={30} className="mobile-nav-icon" onClick={handleOpen} />
                    ) : (
                        <RiMenuFill size={30} className="mobile-nav-icon" onClick={handleOpen} />
                    )}
                    {!open && (
                        <span className="mobile-nav-title">
                            Thuan's Portfolio
                        </span>
                    )}
                    {open && (
                        <div className="mobile-icon-menu flex flex-row justify-around items-center">
                            <div className="mobile-navbar-item-icons">
                                <Link
                                    to="home"
                                    className="mobile-navbar-link-icons"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onClick={handleOpen}
                                >
                                    <IoHomeOutline title="Home" />
                                </Link>
                            </div>
                            <div className="mobile-navbar-item-icons">
                                <Link
                                    to="about"
                                    className="mobile-navbar-link-icons"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onClick={handleOpen}
                                >
                                    <GrContactInfo title="About Me" />
                                </Link>
                            </div>
                            <div className="mobile-navbar-item-icons">
                                <Link
                                    to="projects"
                                    className="mobile-navbar-link-icons"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onClick={handleOpen}
                                >
                                    <BsDiagram3 title="Projects" />
                                </Link>
                            </div>
                            <div className="mobile-navbar-item-icons">
                                <Link
                                    to="certifications"
                                    className="mobile-navbar-link-icons"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onClick={handleOpen}
                                >
                                    <TbCertificate title="Certifications" />
                                </Link>
                            </div>
                            <div className="mobile-navbar-item-icons">
                                <Link
                                    to="contact"
                                    className="mobile-navbar-link-icons"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onClick={handleOpen}
                                >
                                    <HiOutlineMail title="Contact" />
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav;
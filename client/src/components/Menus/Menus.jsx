import React from 'react';
import './menus.css';
import profilePic from '../../assets/images/mb.jpg';
import { IoHomeOutline } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { TbCertificate } from "react-icons/tb";
import { BsDiagram3 } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Menus = ({ toggle }) => {
    return (
        <div className="flex flex-col h-full">
            {toggle ? (
                <>
                    <div className="navbar-profile-pic">
                        <a href="#">
                            <img src={profilePic} alt="Profile-picture" className="about-img mx-auto md:mx-0" />
                        </a>
                    </div>
                    <h3 className="text-center text-white text-2xl fw-light">Le Van Thuan</h3>
                    <div className="navbar-items flex-1">
                        <div className="navbar-item">
                            <Link to="home" className="navbar-link" spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100} >
                                <IoHomeOutline /> Home
                            </Link>
                        </div>
                        <div className="navbar-item">
                            <Link to="about" className="navbar-link" spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100} >
                                <GrContactInfo /> About Me
                            </Link>
                        </div>
                        <div className="navbar-item">
                            <Link to="projects" className="navbar-link" spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100} >
                                <BsDiagram3 /> Projects
                            </Link>
                        </div>
                        <div className="navbar-item">
                            <Link to="certifications" className="navbar-link" spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100} >
                                <TbCertificate /> Certifications
                            </Link>
                        </div>
                        <div className="navbar-item">
                            <Link to="contact" className="navbar-link" spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100} >
                                <HiOutlineMail /> Contact
                            </Link>
                        </div>
                    </div>
                    <div className="mt-auto flex flex-col items-center gap-4 text-white pb-4">
                        <div className="flex justify-center gap-6">
                            <a href="https://www.facebook.com/thuanlv0911" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaFacebookF className="cursor-pointer hover:text-blue-500 transition-colors duration-200" title="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/thuanlv0911" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaInstagram className="cursor-pointer hover:text-pink-500 transition-colors duration-200" title="Instagram" />
                            </a>
                            <a href="https://github.com/thuanlv0911" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaGithub className="cursor-pointer hover:text-gray-500 transition-colors duration-200" title="GitHub" />
                            </a>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                            <FaRegCopyright /> thuanlv0911
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="navbar-profile-pic-icons">
                        <img src={profilePic} alt="Profile-picture" />
                    </div>
                    <div className="navbar-items-icons flex-1">
                        <div className="navbar-item-icons">
                            <Link to="home" className="navbar-link-icons" spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100} >
                                <IoHomeOutline title="Home" />
                            </Link>
                        </div>
                        <div className="navbar-item-icons">
                            <Link to="about" className="navbar-link-icons" spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100} >
                                <GrContactInfo title="About Me" />
                            </Link>
                        </div>
                        <div className="navbar-item-icons">
                            <Link to="projects" className="navbar-link-icons" spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100} >
                                <BsDiagram3 title="Projects" />
                            </Link>
                        </div>
                        <div className="navbar-item-icons">
                            <Link to="certifications" className="navbar-link-icons" spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100} >
                                <TbCertificate title="Certifications" />
                            </Link>
                        </div>
                        <div className="navbar-item-icons">
                            <Link to="contact" className="navbar-link-icons" spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100} >
                                <HiOutlineMail title="Contact" />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-auto flex flex-col items-center gap-4 text-white pb-4">
                        <div className="flex flex-col items-center gap-4">
                            <a href="https://www.facebook.com/thuanlv0911" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaFacebookF className="cursor-pointer hover:text-blue-500 transition-colors duration-200" title="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/thuanlv0911" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaInstagram className="cursor-pointer hover:text-pink-500 transition-colors duration-200" title="Instagram" />
                            </a>
                            <a href="https://github.com/thuanlv0911" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaGithub className="cursor-pointer hover:text-gray-300 transition-colors duration-200" title="GitHub" />
                            </a>
                        </div>
                        <FaRegCopyright className="text-sm" title="thuanlv0911" />
                    </div>
                </>
            )}
        </div>
    );
};

export default Menus;

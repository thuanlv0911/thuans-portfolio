import React from 'react';
import './menus.css';
import profilePic from '../../assets/images/mb.jpg';
import { IoHomeOutline } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { TbCertificate } from "react-icons/tb";
import { BsDiagram3 } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Menus = ({ toggle }) => {
    return (
        <div className="flex flex-col h-full">
            {toggle ? (
                <>
                    <div className="navbar-profile-pic">
                        <img src={profilePic} alt="Profile-picture" />
                    </div>
                    <h3 className="text-center text-white text-2xl fw-light">Le Van Thuan</h3>
                    <div className="navbar-items flex-1">
                        <div className="navbar-item">
                            <div className="navbar-link">
                                <IoHomeOutline />Home
                            </div>
                        </div>
                        <div className='navbar-item'>
                            <div className="navbar-link">
                                <GrContactInfo />About Me
                            </div>
                        </div>
                        <div className='navbar-item'>
                            <div className="navbar-link">
                                <BsDiagram3 />Projects
                            </div>
                        </div>
                        <div className='navbar-item'>
                            <div className="navbar-link">
                                <TbCertificate />Certifications
                            </div>
                        </div>
                        <div className='navbar-item'>
                            <div className="navbar-link">
                                <FiPhoneCall />Contact
                            </div>
                        </div>
                    </div>
                    <div className="mt-auto flex flex-col items-center gap-4 text-white pb-4">
                        <div className="flex justify-center gap-6">
                            <FaFacebookF className="cursor-pointer hover:text-blue-500 transition-colors duration-200" title="Facebook" />
                            <FaInstagram className="cursor-pointer hover:text-pink-500 transition-colors duration-200" title="Instagram" />
                            <FaGithub className="cursor-pointer hover:text-gray-500 transition-colors duration-200" title="GitHub" />
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
                        <div className='navbar-item-icons'>
                            <div className="navbar-link-icons">
                                <IoHomeOutline title="Home" />
                            </div>
                        </div>
                        <div className='navbar-item-icons'>
                            <div className="navbar-link-icons">
                                <GrContactInfo title="About me" />
                            </div>
                        </div>
                        <div className='navbar-item-icons'>
                            <div className="navbar-link-icons">
                                <BsDiagram3 title="Projects" />
                            </div>
                        </div>
                        <div className='navbar-item-icons'>
                            <div className="navbar-link-icons">
                                <TbCertificate title="Certifications" />
                            </div>
                        </div>
                        <div className='navbar-item-icons'>
                            <div className="navbar-link-icons">
                                <FiPhoneCall title="Contact" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-auto flex flex-col items-center gap-4 text-white pb-4">
                        <div className="flex flex-col items-center gap-4">
                            <FaFacebookF className="cursor-pointer hover:text-blue-500 transition-colors duration-200" title="Facebook" />
                            <FaInstagram className="cursor-pointer hover:text-pink-500 transition-colors duration-200" title="Instagram" />
                            <FaGithub className="cursor-pointer hover:text-gray-300 transition-colors duration-200" title="GitHub" />
                        </div>
                        <FaRegCopyright className="text-sm" title="thuanlv0911" />
                    </div>
                </>
            )}
        </div>
    );
};

export default Menus;
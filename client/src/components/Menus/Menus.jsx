/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
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
import { motion, useInView } from 'framer-motion';

const avatarVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.8 }
    }
};

const avatarIconVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.8 }
    }
};

const nameVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 120, damping: 10, duration: 0.6 }
    }
};

const navbarContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const navbarItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.6 }
    }
};

const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.6 }
    }
};

const socialHoverVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
        scale: 1.2,
        rotate: 5,
        transition: { type: "spring", stiffness: 300, damping: 10 }
    }
};

const Menus = () => {
    const menuRef = useRef(null);
    const isInView = useInView(menuRef, { margin: "-50px" });

    return (
        <motion.div
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col h-full"
        >
            <motion.div
                className="full-menu flex flex-col h-full"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
            >
                <motion.div
                    variants={avatarVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="navbar-profile-pic"
                >
                    <a href="#">
                        <img src={profilePic} alt="Profile-picture" className="about-img mx-auto md:mx-0" />
                    </a>
                </motion.div>
                <motion.h3
                    variants={nameVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="about-name text-center text-2xl fw-light"
                >
                    Le Van Thuan
                </motion.h3>
                <motion.div
                    variants={navbarContainerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="navbar-items flex-1"
                >
                    <motion.div variants={navbarItemVariants} className="navbar-item">
                        <Link to="home" className="navbar-link" spy={true} smooth={true} offset={-100} duration={100}>
                            <IoHomeOutline /> Home
                        </Link>
                    </motion.div>
                    <motion.div variants={navbarItemVariants} className="navbar-item">
                        <Link to="about" className="navbar-link" spy={true} smooth={true} offset={-100} duration={100}>
                            <GrContactInfo /> About Me
                        </Link>
                    </motion.div>
                    <motion.div variants={navbarItemVariants} className="navbar-item">
                        <Link to="projects" className="navbar-link" spy={true} smooth={true} offset={-100} duration={100}>
                            <BsDiagram3 /> Projects
                        </Link>
                    </motion.div>
                    <motion.div variants={navbarItemVariants} className="navbar-item">
                        <Link to="certifications" className="navbar-link" spy={true} smooth={true} offset={-100} duration={100}>
                            <TbCertificate /> Certifications
                        </Link>
                    </motion.div>
                    <motion.div variants={navbarItemVariants} className="navbar-item">
                        <Link to="contact" className="navbar-link" spy={true} smooth={true} offset={-100} duration={100}>
                            <HiOutlineMail /> Contact
                        </Link>
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={footerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-auto flex flex-col items-center gap-4 text-white pb-4"
                >
                    <div className="flex justify-center gap-6">
                        <motion.a
                            href="https://www.facebook.com/thuanlv0911"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            whileHover="hover"
                            initial="rest"
                            variants={socialHoverVariants}
                        >
                            <FaFacebookF className="cursor-pointer hover:text-blue-500 transition-colors duration-200" title="Facebook" />
                        </motion.a>
                        <motion.a
                            href="https://www.instagram.com/thuanlv0911"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            whileHover="hover"
                            initial="rest"
                            variants={socialHoverVariants}
                        >
                            <FaInstagram className="cursor-pointer hover:text-pink-500 transition-colors duration-200" title="Instagram" />
                        </motion.a>
                        <motion.a
                            href="https://github.com/thuanlv0911"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            whileHover="hover"
                            initial="rest"
                            variants={socialHoverVariants}
                        >
                            <FaGithub className="cursor-pointer hover:text-gray-500 transition-colors duration-200" title="GitHub" />
                        </motion.a>
                    </div>
                    <motion.div
                        variants={footerVariants}
                        className="flex items-center gap-1 text-sm about-copyright"
                    >
                        <FaRegCopyright /> thuanlv0911
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                className="icon-menu flex flex-col h-full"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
            >
                <motion.div
                    variants={avatarIconVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="navbar-profile-pic-icons"
                >
                    <img src={profilePic} alt="Profile-picture" />
                </motion.div>
                <motion.div
                    variants={navbarContainerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="navbar-items-icons flex-1"
                >
                    <motion.div variants={navbarItemVariants} className="navbar-item-icons">
                        <Link to="home" className="navbar-link-icons" spy={true} smooth={true} offset={-100} duration={100}>
                            <IoHomeOutline title="Home" />
                        </Link>
                    </motion.div>
                    <motion.div variants={navbarItemVariants} className="navbar-item-icons">
                        <Link to="about" className="navbar-link-icons" spy={true} smooth={true} offset={-100} duration={100}>
                            <GrContactInfo title="About Me" />
                        </Link>
                    </motion.div>
                    <motion.div variants={navbarItemVariants} className="navbar-item-icons">
                        <Link to="projects" className="navbar-link-icons" spy={true} smooth={true} offset={-100} duration={100}>
                            <BsDiagram3 title="Projects" />
                        </Link>
                    </motion.div>
                    <motion.div variants={navbarItemVariants} className="navbar-item-icons">
                        <Link to="certifications" className="navbar-link-icons" spy={true} smooth={true} offset={-100} duration={100}>
                            <TbCertificate title="Certifications" />
                        </Link>
                    </motion.div>
                    <motion.div variants={navbarItemVariants} className="navbar-item-icons">
                        <Link to="contact" className="navbar-link-icons" spy={true} smooth={true} offset={-100} duration={100}>
                            <HiOutlineMail title="Contact" />
                        </Link>
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={footerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-auto flex flex-col items-center gap-4 text-white pb-4"
                >
                    <div className="flex flex-col items-center gap-4">
                        <motion.a
                            href="https://www.facebook.com/thuanlv0911"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            whileHover="hover"
                            initial="rest"
                            variants={socialHoverVariants}
                        >
                            <FaFacebookF className="cursor-pointer hover:text-blue-500 transition-colors duration-200" title="Facebook" />
                        </motion.a>
                        <motion.a
                            href="https://www.instagram.com/thuanlv0911"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            whileHover="hover"
                            initial="rest"
                            variants={socialHoverVariants}
                        >
                            <FaInstagram className="cursor-pointer hover:text-pink-500 transition-colors duration-200" title="Instagram" />
                        </motion.a>
                        <motion.a
                            href="https://github.com/thuanlv0911"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            whileHover="hover"
                            initial="rest"
                            variants={socialHoverVariants}
                        >
                            <FaGithub className="cursor-pointer hover:text-gray-300 transition-colors duration-200" title="GitHub" />
                        </motion.a>
                    </div>
                    <motion.div
                        variants={footerVariants}
                        className="text-sm about-copyright"
                    >
                        <FaRegCopyright title="thuanlv0911" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Menus;
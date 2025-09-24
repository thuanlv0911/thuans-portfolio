import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { RiMenuFill, RiMenuFold2Fill } from "react-icons/ri";
import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { TbCertificate } from "react-icons/tb";
import { BsDiagram3 } from "react-icons/bs";
import { Link } from 'react-scroll';

const iconVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.6 }
    }
};

const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 120, damping: 10, duration: 0.6 }
    }
};

const menuContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.6 }
    }
};

const Nav = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div>
            <motion.div className="mobile-nav">
                <motion.div className="mobile-nav-header">
                    <motion.div
                        variants={iconVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {open ? (
                            <RiMenuFold2Fill size={30} className="mobile-nav-icon" onClick={handleOpen} />
                        ) : (
                            <RiMenuFill size={30} className="mobile-nav-icon" onClick={handleOpen} />
                        )}
                    </motion.div>
                    {!open && (
                        <motion.span
                            className="mobile-nav-title"
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            Thuan's Portfolio
                        </motion.span>
                    )}
                    {open && (
                        <motion.div
                            className="mobile-icon-menu flex flex-row justify-around items-center"
                            variants={menuContainerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div className="mobile-navbar-item-icons" variants={menuItemVariants}>
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
                            </motion.div>
                            <motion.div className="mobile-navbar-item-icons" variants={menuItemVariants}>
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
                            </motion.div>
                            <motion.div className="mobile-navbar-item-icons" variants={menuItemVariants}>
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
                            </motion.div>
                            <motion.div className="mobile-navbar-item-icons" variants={menuItemVariants}>
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
                            </motion.div>
                            <motion.div className="mobile-navbar-item-icons" variants={menuItemVariants}>
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
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Nav;     
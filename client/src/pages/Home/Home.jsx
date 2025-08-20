import React, { useRef } from 'react';
import './home.css';
import Typewriter from 'typewriter-effect';
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { BsMoonStars, BsSun } from "react-icons/bs";

import profilePic from '../../assets/images/hxx.jpg';
import { Button } from 'react-bootstrap';
// eslint-disable-next-line no-unused-vars
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-scroll';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 }
    },
    exit: {
        opacity: 0,
        transition: { staggerChildren: 0.15, staggerDirection: -1 }
    }
};
const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 10,
            duration: 0.8
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.9,
        transition: { duration: 0.1, ease: "easeIn" }
    }
};
const typewriterVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            duration: 0.8
        }
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.4, ease: "easeIn" }
    }
};

const avatarVariants = {
    hidden: { opacity: 0, x: -150, scale: 0.7, rotate: -15 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            duration: 1
        }
    },
    exit: {
        opacity: 0,
        x: -50,
        scale: 0.8,
        rotate: 10,
        transition: { duration: 0.4, ease: "easeIn" }
    }
};

const contentVariants = {
    hidden: { opacity: 0, x: 150, rotate: 10 },
    visible: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 10,
            duration: 1
        }
    },
    exit: {
        opacity: 0,
        x: 50,
        rotate: -5,
        transition: { duration: 0.4, ease: "easeIn" }
    }
};

const hoverVariants = {
    rest: { scale: 1, y: 0, rotate: 0 },
    hover: {
        scale: 1.2,
        y: -8,
        rotate: 5,
        transition: { type: "spring", stiffness: 400, damping: 8 }
    }
};

const Home = () => {
    const profileRef = useRef(null);
    const contentRef = useRef(null);

    const isProfileInView = useInView(profileRef, { margin: "-50px" });
    const isContentInView = useInView(contentRef, { margin: "-50px" });

    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex items-center justify-center min-h-screen" id="home">
            <div className="theme-btn" onClick={toggleTheme}>
                {theme === "light" ? (
                    <BsSun size={30} />
                ) : (
                    <BsMoonStars size={30} />
                )}
            </div>
            <div className="container flex flex-col md:flex-row items-center justify-between gap-8 px-4">
                <motion.div
                    ref={contentRef}
                    variants={contentVariants}
                    initial="hidden"
                    animate={isContentInView ? "visible" : "exit"}
                    className="home-content flex-1"
                >
                    <motion.div variants={containerVariants}>
                        <motion.h2 variants={itemVariants} className="text-3xl">
                            👋Hi, I'm
                        </motion.h2>
                        <motion.h1 variants={itemVariants} className="text-5xl font-bold text-blue-500">
                            Le Van Thuan
                        </motion.h1>
                        <h2 className="flex justify-center md:justify-start items-center gap-2 text-2xl">
                            I am a
                            <motion.span variants={typewriterVariants}>
                                <Typewriter
                                    options={{
                                        strings: ['Front-end Developer!', 'Software Engineer!'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </motion.span>
                        </h2>
                        <p className="text-lg mt-3">
                            I am a Front-end Developer with a passion for creating beautiful and functional user interfaces. I have experience in React, JavaScript, and CSS, and I love to learn new technologies.
                        </p>
                        <div className="mxh-icons flex justify-center md:justify-start gap-6 mt-4">
                            <motion.a
                                href="https://www.facebook.com/thuanlv0911"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                                variants={hoverVariants}
                            >
                                <FaFacebookF
                                    size={40}
                                    className="p-2 rounded-full bg-[#1877F2] text-white border-1 border-white hover:border-[#1877F2] transition-all duration-200 shadow-lg"
                                    title="Facebook"
                                />
                            </motion.a>
                            <motion.a
                                href="https://www.instagram.com/thuanlv0911"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                                variants={hoverVariants}
                            >
                                <FaInstagram
                                    size={40}
                                    className="p-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white border-1 border-white hover:border-pink-500 transition-all duration-200 shadow-lg"
                                    title="Instagram"
                                />
                            </motion.a>
                            <motion.a
                                href="https://github.com/thuanlv0911"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                                variants={hoverVariants}
                            >
                                <FaGithub
                                    size={40}
                                    className="p-2 rounded-full bg-black text-white border-1 border-white hover:border-black transition-all duration-200 shadow-lg"
                                    title="GitHub"
                                />
                            </motion.a>
                        </div>
                    </motion.div>
                    <div className="home-button mt-4">
                        <Button className="btn btn-about">
                            <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>About me
                            </Link>
                        </Button>
                    </div>
                </motion.div>
                <motion.div
                    ref={profileRef}
                    variants={avatarVariants}
                    initial="hidden"
                    animate={isProfileInView ? "visible" : "exit"}
                    style={{ y: yParallax }}
                    className="flex-1 flex justify-center"
                >
                    <img src={profilePic} alt="Profile-picture" className="profile-pic mx-auto md:mx-0" />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
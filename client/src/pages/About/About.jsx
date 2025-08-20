import React, { useRef } from "react";
import "../About/about.css";
import profilePic from "../../assets/images/taxuaco.jpg";
import { Button } from "react-bootstrap";
import {
    SiCplusplus, SiJavascript, SiReact, SiBootstrap, SiTailwindcss, SiIntellijidea, SiGithub, SiMongodb, SiMysql
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { BsFiletypeSql } from "react-icons/bs";
import { FiPhoneCall, FiDownload } from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-scroll";

const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 12,
            duration: 0.8
        }
    },
    exit: {
        opacity: 0,
        x: -50,
        transition: {
            duration: 0.5,
            ease: "easeIn"
        }
    }
};

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.8
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.5,
            ease: "easeIn"
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 15,
            delay: i * 0.15
        }
    }),
    exit: {
        opacity: 0,
        x: 50,
        scale: 0.8,
        transition: {
            duration: 0.5,
            ease: "easeIn"
        }
    }
};

const skillHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
        scale: 1.1,
        y: -10,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 10
        }
    }
};

const skillContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.2
        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.15,
            staggerDirection: -1
        }
    }
};

const skillGroupVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 15,
            duration: 1.0
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.8,
        transition: {
            duration: 0.5,
            ease: "easeIn"
        }
    }
};

const About = () => {
    const { theme } = useTheme();
    const profileRef = useRef(null);
    const educationRef = useRef(null);
    const buttonsRef = useRef(null);
    const languageRef = useRef(null);
    const skillsRef = useRef(null);

    const isProfileInView = useInView(profileRef, { once: false, margin: "-50px" });
    const isEducationInView = useInView(educationRef, { once: false, margin: "-50px" });
    const isButtonsInView = useInView(buttonsRef, { once: false, margin: "-50px" });
    const isLanguageInView = useInView(languageRef, { once: false, margin: "-50px" });
    const isSkillsInView = useInView(skillsRef, { once: false, margin: "-50px" });

    return (
        <div className={`min-h-screen flex items-center justify-center ${theme === "light" ? "bg-[#10101A]" : "bg-[#fff]"}`} id="about">
            <div className="about w-full py-8 px-4">
                <div className="flex flex-col md:flex-row gap-16">
                    <motion.div
                        ref={profileRef}
                        variants={imageVariants}
                        initial="hidden"
                        animate={isProfileInView ? "visible" : "exit"}
                        className="flex-shrink-0"
                    >
                        <img
                            src={profilePic}
                            alt="Profile-picture"
                            className="about-img mx-auto"
                        />
                    </motion.div>
                    <div className="flex-1 space-y-6">
                        <motion.h1
                            variants={containerVariants}
                            initial="hidden"
                            animate={isProfileInView ? "visible" : "exit"}
                            className={`text-4xl font-mono about-title ${theme === "light" ? "text-white" : "text-[#10101A]"}`}
                        >
                            About Me
                        </motion.h1>
                        <motion.div
                            ref={educationRef}
                            variants={containerVariants}
                            initial="hidden"
                            animate={isEducationInView ? "visible" : "exit"}
                            className={`education p-6 rounded-lg pl-16 ${theme === "light" ? "bg-[#0B0B13]" : "bg-[#eee]"}`}
                        >
                            <h3 className="text-3xl text-[#2196F3] font-semibold">Education</h3>
                            <motion.p
                                variants={itemVariants}
                                custom={0}
                                className={`text-lg fpt-university ${theme === "light" ? "text-white" : "text-[#10101A]"}`}
                            >
                                FPT University Hanoi
                            </motion.p>
                            <motion.p
                                variants={itemVariants}
                                custom={1}
                                className={`text-lg fpt-university ${theme === "light" ? "text-white" : "text-[#10101A]"}`}
                            >
                                Majoring in Software Engineering - GPA: 3.19/4
                            </motion.p>
                        </motion.div>
                        <motion.div
                            ref={buttonsRef}
                            variants={containerVariants}
                            initial="hidden"
                            animate={isButtonsInView ? "visible" : "exit"}
                            className="about-buttons flex gap-4 pl-16"
                        >

                            <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                                <Button className="btn-about btn-contact">
                                    <span className="btn-content">
                                        <FiPhoneCall className="btn-icon" />
                                        Contact
                                    </span>
                                </Button>
                            </Link>
                            <Button
                                as="a"
                                href="https://drive.google.com/file/d/1pZGIOhJ-CgGJri09DHKfcvIPgYLwJcHB/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-about btn-resume"
                            >
                                <span className="btn-content">
                                    <FiDownload className="btn-icon" />
                                    My Resumé
                                </span>
                            </Button>

                        </motion.div>
                    </div>
                </div>
                <motion.div
                    ref={languageRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isLanguageInView ? "visible" : "exit"}
                    className={`language mt-8 p-6 rounded-lg pl-16 ${theme === "light" ? "bg-[#0B0B13]" : "bg-[#eee]"}`}
                >
                    <h2 className="text-3xl font-semibold text-[#2196F3]">Languages</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ml-8">
                        {[
                            { text: "English: Intermediate", className: "language-english" },
                            { text: "Vietnamese: Mother Tongue", className: "language-vietnamese" },
                            { text: "Japanese: Basic", className: "language-japanese" }
                        ].map((lang, index) => (
                            <motion.p
                                key={index}
                                variants={itemVariants}
                                custom={index}
                                className={`text-lg ${lang.className} ${theme === "light" ? "text-white" : "text-[#10101A]"}`}
                            >
                                {lang.text}
                            </motion.p>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    ref={skillsRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isSkillsInView ? "visible" : "exit"}
                    className={`language mt-8 p-6 rounded-lg pl-16 ${theme === "light" ? "bg-[#0B0B13]" : "bg-[#eee]"}`}
                >
                    <h2 className="text-3xl font-semibold text-[#2196F3]">Skills</h2>
                    <motion.div
                        variants={skillContainerVariants}
                        initial="hidden"
                        animate={isSkillsInView ? "visible" : "exit"}
                        className="mt-4 space-y-6"
                    >
                        <motion.div variants={skillGroupVariants}>
                            <h3 className={`text-xl font-semibold ${theme === "light" ? "text-white" : "text-[#10101A]"}`}>Programming Languages</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                                {[
                                    { icon: <SiCplusplus className="text-5xl" />, text: "C/C++", className: "skill-cplusplus" },
                                    { icon: <FaJava className="text-5xl" />, text: "Java", className: "skill-java" },
                                    { icon: <SiJavascript className="text-5xl" />, text: "Javascript", className: "skill-javascript" }
                                ].map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        custom={index}
                                        whileHover="hover"
                                        initial="rest"
                                        animate="rest"
                                        className={`flex items-center gap-2 skill-item ${skill.className}`}
                                    >
                                        <motion.div variants={skillHoverVariants}>
                                            {skill.icon}
                                        </motion.div>
                                        <motion.span variants={skillHoverVariants} className={theme === "light" ? "text-white" : "text-[#10101A]"}>
                                            {skill.text}
                                        </motion.span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div variants={skillGroupVariants}>
                            <h3 className={`text-xl font-semibold ${theme === "light" ? "text-white" : "text-[#10101A]"}`}>Frameworks & Libraries</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                                {[
                                    { icon: <SiReact className="text-5xl" />, text: "ReactJS", className: "skill-react" },
                                    { icon: <SiBootstrap className="text-5xl" />, text: "Bootstrap", className: "skill-bootstrap" },
                                    { icon: <SiTailwindcss className="text-5xl" />, text: "TailwindCSS", className: "skill-tailwind" }
                                ].map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        custom={index}
                                        whileHover="hover"
                                        initial="rest"
                                        animate="rest"
                                        className={`flex items-center gap-2 skill-item ${skill.className}`}
                                    >
                                        <motion.div variants={skillHoverVariants}>
                                            {skill.icon}
                                        </motion.div>
                                        <motion.span variants={skillHoverVariants} className={theme === "light" ? "text-white" : "text-[#10101A]"}>
                                            {skill.text}
                                        </motion.span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div variants={skillGroupVariants}>
                            <h3 className={`text-xl font-semibold ${theme === "light" ? "text-white" : "text-[#10101A]"}`}>Tools</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                                {[
                                    { icon: <VscVscode className="text-5xl" />, text: "Visual Studio Code", className: "skill-vscode" },
                                    { icon: <SiIntellijidea className="text-5xl" />, text: "IntelliJ IDEA", className: "skill-intellij" },
                                    { icon: <SiGithub className="text-5xl" />, text: "Git/Github", className: "skill-github" },
                                    { icon: <BsFiletypeSql className="text-5xl" />, text: "SQL Server", className: "skill-sqlserver" },
                                    { icon: <SiMysql className="text-5xl" />, text: "MySQL", className: "skill-mysql" },
                                    { icon: <SiMongodb className="text-5xl" />, text: "MongoDB", className: "skill-mongodb" }
                                ].map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        custom={index}
                                        whileHover="hover"
                                        initial="rest"
                                        animate="rest"
                                        className={`flex items-center gap-2 skill-item ${skill.className}`}
                                    >
                                        <motion.div variants={skillHoverVariants}>
                                            {skill.icon}
                                        </motion.div>
                                        <motion.span variants={skillHoverVariants} className={theme === "light" ? "text-white" : "text-[#10101A]"}>
                                            {skill.text}
                                        </motion.span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div variants={skillGroupVariants}>
                            <h3 className={`text-xl font-semibold ${theme === "light" ? "text-white" : "text-[#10101A]"}`}>Platform</h3>
                            <motion.div
                                variants={itemVariants}
                                custom={0}
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                                className="flex items-center gap-2 skill-item skill-nodejs mt-2"
                            >
                                <motion.div variants={skillHoverVariants}>
                                    <FaNodeJs className="text-5xl" />
                                </motion.div>
                                <motion.span variants={skillHoverVariants} className={theme === "light" ? "text-white" : "text-[#10101A]"}>
                                    Node.js
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
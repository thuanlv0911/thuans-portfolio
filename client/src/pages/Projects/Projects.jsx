import React, { useRef } from 'react';
import "./project.css";
import CMS from "../../assets/images/cms.png";
import MyPortfolio from "../../assets/images/portfolio.png";
import Shop1912Mobile from "../../assets/images/uniclub.png";
import { FaJava } from "react-icons/fa6";
import { SiJavascript, SiReact, SiBootstrap, SiTailwindcss, SiMysql, SiVite } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 0.6, ease: "easeOut" }
    }
};

const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 0.5, ease: "easeOut" }
    },
    hover: {
        y: -10,
        boxShadow: "0px 8px 20px rgba(33, 150, 243, 0.3)",
        transition: { type: "tween", duration: 0.3, ease: "easeOut" }
    }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 150, damping: 15, duration: 0.5, delay: 0.22 }
    }
};

const titleCardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 150, damping: 15, duration: 0.5, delay: 0.22 }
    }
};

const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 150, damping: 15, duration: 0.5 }
    }
};

const techPillVariants = {
    hidden: { opacity: 0, x: -10, scale: 0.8 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 150, damping: 15, duration: 0.4 }
    }
};

const detailsVariants = {
    rest: { x: 0 },
    hover: {
        x: 5,
        color: "#2196F3",
        transition: { type: "tween", duration: 0.2, ease: "easeOut" }
    }
};

const Projects = () => {
    const { theme } = useTheme();
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });

    return (
        <div className={`min-h-screen flex items-center justify-center ${theme === "light" ? "bg-[#10101A]" : "bg-[#fff]"}`} id="projects">
            <div className="projects w-full px-4 py-8">
                <motion.h1
                    variants={titleVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className={`text-4xl font-mono projects-title ${theme === "light" ? "text-white" : "text-[#10101A]"}`}
                >
                    Projects
                </motion.h1>
                <motion.div
                    ref={containerRef}
                    variants={cardContainerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="card-container grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                >
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className={`card-item rounded-lg p-4 flex flex-col relative overflow-hidden ${theme === "light" ? "bg-[#0B0B13]" : "bg-[#eee]"}`}
                    >
                        <motion.a
                            href="https://github.com/Nodaco35/swp391-clubs-management"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-img-link"
                            variants={imageVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <div className="card-img-container relative">
                                <img src={CMS} alt="Club Management System" className="card-img rounded-lg mb-4" />
                                <div className="card-overlay">View Details</div>
                            </div>
                        </motion.a>
                        <motion.h2
                            variants={titleCardVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="text-2xl font-semibold text-[#2196F3]"
                        >
                            Club Management System
                        </motion.h2>
                        <motion.p
                            variants={descriptionVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className={`${theme === "light" ? "text-gray-300" : "text-gray-700"} mt-2 flex-grow`}
                        >
                            UniClub is a web-based club management system built using Java EE technologies. The application enables club administrators and members to manage events, departments, and internal communications effectively.
                        </motion.p>
                        <div className="tech-stack mt-4">
                            <motion.div
                                variants={cardContainerVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                className="flex flex-wrap gap-2"
                            >
                                {[
                                    { text: "Java Servlet", icon: <FaJava className="tech-icon" /> },
                                    { text: "JSP", icon: <FaJava className="tech-icon" /> },
                                    { text: "JDBC", icon: <FaJava className="tech-icon" /> },
                                    { text: "TailwindCSS", icon: <SiTailwindcss className="tech-icon" /> },
                                    { text: "MySQL", icon: <SiMysql className="tech-icon" /> }
                                ].map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        variants={techPillVariants}
                                        className={`tech-pill ${theme === "light" ? "bg-white text-[#2196F3]" : "bg-[#10101A]"}`}
                                    >
                                        <span className="tech-text">{tech.text}</span>
                                        {tech.icon}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <motion.a
                                href="https://github.com/Nodaco35/swp391-clubs-management"
                                className={`details font-sans ${theme === "light" ? "text-[#fff]" : "text-[#10101A]"}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={detailsVariants}
                                initial="rest"
                                whileHover="hover"
                            >
                                Details
                            </motion.a>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className={`card-item rounded-lg p-4 flex flex-col relative overflow-hidden ${theme === "light" ? "bg-[#0B0B13]" : "bg-[#eee]"}`}
                    >
                        <motion.a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-img-link"
                            variants={imageVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <div className="card-img-container relative">
                                <img src={MyPortfolio} alt="Personal Portfolio" className="card-img rounded-lg mb-4" />
                                <div className="card-overlay">View Details</div>
                            </div>
                        </motion.a>
                        <motion.h2
                            variants={titleCardVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="text-2xl font-semibold text-[#2196F3]"
                        >
                            Personal Portfolio
                        </motion.h2>
                        <motion.p
                            variants={descriptionVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className={`${theme === "light" ? "text-gray-300" : "text-gray-700"} mt-2 flex-grow`}
                        >
                            Portfolio website showcasing my skills, projects, and achievements. Built with modern web technologies to provide a smooth and visually appealing user experience.
                        </motion.p>
                        <div className="tech-stack mt-4">
                            <motion.div
                                variants={cardContainerVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                className="flex flex-wrap gap-2"
                            >
                                {[
                                    { text: "ReactJS", icon: <SiReact className="tech-icon" /> },
                                    { text: "Vite", icon: <SiVite className="tech-icon" /> },
                                    { text: "Javascript", icon: <SiJavascript className="tech-icon" /> },
                                    { text: "TailwindCSS", icon: <SiTailwindcss className="tech-icon" /> },
                                    { text: "Bootstrap", icon: <SiBootstrap className="tech-icon" /> }
                                ].map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        variants={techPillVariants}
                                        className={`tech-pill ${theme === "light" ? "bg-white text-[#2196F3]" : "bg-[#10101A] "}`}
                                    >
                                        <span className="tech-text">{tech.text}</span>
                                        {tech.icon}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <motion.a
                                href="#"
                                className={`details font-sans ${theme === "light" ? "text-[#fff]" : "text-[#10101A]"}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={detailsVariants}
                                initial="rest"
                                whileHover="hover"
                            >
                                Details
                            </motion.a>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className={`card-item rounded-lg p-4 flex flex-col relative overflow-hidden ${theme === "light" ? "bg-[#0B0B13]" : "bg-[#eee]"}`}
                    >
                        <motion.a
                            href="https://github.com/thuanlv0911/1912-mobile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-img-link"
                            variants={imageVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <div className="card-img-container relative">
                                <img src={Shop1912Mobile} alt="1912 Mobile" className="card-img rounded-lg mb-4" />
                                <div className="card-overlay">View Details</div>
                            </div>
                        </motion.a>
                        <motion.h2
                            variants={titleCardVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="text-2xl font-semibold text-[#2196F3]"
                        >
                            1912 Mobile
                        </motion.h2>
                        <motion.p
                            variants={descriptionVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className={`${theme === "light" ? "text-gray-300" : "text-gray-700"} mt-2 flex-grow`}
                        >
                            1912Mobile is a basic web application developed using JSP (JavaServer Pages), Java Servlet, JSTL (JavaServer Pages Standard Tag Library), and SQL Server as the database.
                        </motion.p>
                        <div className="tech-stack mt-4">
                            <motion.div
                                variants={cardContainerVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                className="flex flex-wrap gap-2"
                            >
                                {[
                                    { text: "Java Servlet", icon: <FaJava className="tech-icon" /> },
                                    { text: "JSP", icon: <FaJava className="tech-icon" /> },
                                    { text: "JDBC", icon: <FaJava className="tech-icon" /> },
                                    { text: "JSTL", icon: <FaJava className="tech-icon" /> },
                                    { text: "SQL Server", icon: <BsFiletypeSql className="tech-icon" /> }
                                ].map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        variants={techPillVariants}
                                        className={`tech-pill ${theme === "light" ? "bg-white text-[#2196F3]" : "bg-[#10101A]"}`}
                                    >
                                        <span className="tech-text">{tech.text}</span>
                                        {tech.icon}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <motion.a
                                href="https://github.com/thuanlv0911/1912-mobile"
                                className={`details font-sans ${theme === "light" ? "text-[#fff]" : "text-[#10101A]"}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={detailsVariants}
                                initial="rest"
                                whileHover="hover"
                            >
                                Details
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
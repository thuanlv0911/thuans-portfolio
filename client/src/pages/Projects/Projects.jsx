import React from 'react';
import "./project.css";
import CMS from "../../assets/images/cms.png";
import MyPortfolio from "../../assets/images/portfolio.png";
import Shop1912Mobile from "../../assets/images/uniclub.png";
import { FaJava } from "react-icons/fa6";
import { SiJavascript, SiReact, SiBootstrap, SiTailwindcss, SiMysql, SiVite } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";

const Projects = () => {
    return (
        <div className="min-h-screen bg-[#10101A] flex items-center justify-center" >
            <div className="projects w-full px-4 py-8">
                <h1 className="text-4xl font-mono projects-title" id="projects">Projects</h1>
                <div className="card-container grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="card-item bg-[#0B0B13] rounded-lg shadow-lg p-4 flex flex-col relative overflow-hidden">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="card-img-link">
                            <div className="card-img-container relative">
                                <img src={CMS} alt="Club Management System" className="card-img rounded-lg mb-4" />
                                <div className="card-overlay">View Details</div>
                            </div>
                        </a>
                        <h2 className="text-2xl font-semibold text-[#2196F3]">Club Management System</h2>
                        <p className="text-gray-300 mt-2 flex-grow">
                            UniClub is a web-based club management system built using Java EE technologies. The application enables club administrators and members to manage events, departments, and internal communications effectively.
                        </p>
                        <div className="tech-stack mt-4">
                            <div className="flex flex-wrap gap-2">
                                <div className="tech-pill">
                                    <span className="tech-text">Java Servlet</span>
                                    <FaJava className="tech-icon" />
                                </div>
                                <div className="tech-pill">
                                    <span className="tech-text">JSP</span>
                                    <FaJava className="tech-icon" />
                                </div>
                                <div className="tech-pill">
                                    <span className="tech-text">JDBC</span>
                                    <FaJava className="tech-icon" />
                                </div>
                                <div className="tech-pill">
                                    <span className="tech-text">TailwindCSS</span>
                                    <SiTailwindcss className="tech-icon" />
                                </div>
                                <div className="tech-pill">
                                    <span className="tech-text">MySQL</span>
                                    <SiMysql className="tech-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <a href="#" className="details font-semibold" target="_blank" rel="noopener noreferrer">Details</a>
                        </div>
                    </div>
                    <div className="card-item bg-[#0B0B13] rounded-lg shadow-lg p-4 flex flex-col relative overflow-hidden">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="card-img-link">
                            <div className="card-img-container relative">
                                <img src={MyPortfolio} alt="Personal Portfolio" className="card-img rounded-lg mb-4" />
                                <div className="card-overlay">View Details</div>
                            </div>
                        </a>
                        <h2 className="text-2xl font-semibold text-[#2196F3]">Personal Portfolio</h2>
                        <p className="text-gray-300 mt-2 flex-grow">
                            Portfolio website showcasing my skills, projects, and achievements. Built with modern web technologies to provide a smooth and visually appealing user experience.
                        </p>
                        <div className="tech-stack mt-4">
                            <div className="flex flex-wrap gap-2">
                                <div className="tech-pill">
                                    <span className="tech-text">ReactJS</span>
                                    <SiReact className="tech-icon" />
                                </div>
                                <div className="tech-pill">
                                    <span className="tech-text">Vite</span>
                                    <SiVite className="tech-icon" />
                                </div>
                                <div className="tech-pill">
                                    <span className="tech-text">Javascript</span>
                                    <SiJavascript className="tech-icon" />
                                </div>
                                <div className="tech-pill">
                                    <span className="tech-text">TailwindCSS</span>
                                    <SiTailwindcss className="tech-icon" />
                                </div>
                                <div className="tech-pill">
                                    <span className="tech-text">Bootstrap</span>
                                    <SiBootstrap className="tech-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <a href="#" className="details font-semibold" target="_blank" rel="noopener noreferrer">Details</a>
                        </div>
                    </div>
                    <div className="card-item bg-[#0B0B13] rounded-lg shadow-lg p-4 flex flex-col relative overflow-hidden">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="card-img-link">
                            <div className="card-img-container relative">
                                <img src={Shop1912Mobile} alt="1912 Mobile" className="card-img rounded-lg mb-4" />
                                <div className="card-overlay">View Details</div>
                            </div>
                        </a>
                        <h2 className="text-2xl font-semibold text-[#2196F3]">1912 Mobile</h2>
                        <p className="text-gray-300 mt-2 flex-grow">
                            1912Mobile is a basic web application developed using JSP (JavaServer Pages), Java Servlet, JSTL (JavaServer Pages Standard Tag Library), and SQL Server as the database.
                        </p>
                        <div className="tech-stack mt-4">
                            <div className="flex flex-wrap gap-2">
                                <div className="tech-pill">
                                    <span className="tech-text">Java Servlet</span>
                                    <FaJava className="tech-icon" />
                                </div>
                                <div className="tech-pill">
                                    <span className="tech-text">JSP</span>
                                    <FaJava className="tech-icon" />
                                </div>
                                <div className="tech-pill">
                                    <span className="tech-text">JDBC</span>
                                    <FaJava className="tech-icon" />
                                </div>
                                <div className="tech-pill">
                                    <span className="tech-text">JSTL</span>
                                    <FaJava className="tech-icon" />
                                </div>
                                <div className="tech-pill">
                                    <span className="tech-text">SQL Server</span>
                                    <BsFiletypeSql className="tech-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <a href="#" className="details font-semibold" target="_blank" rel="noopener noreferrer">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
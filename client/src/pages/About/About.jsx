import React from "react";
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

const About = () => {
    return (
        <div className="min-h-screen bg-[#10101A] flex items-center justify-center px-12">
            <div className="about w-full py-8 px-4">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="flex-shrink-0">
                        <img
                            src={profilePic}
                            alt="Profile-picture"
                            className="about-img mx-auto"
                        />
                    </div>
                    <div className="flex-1 text-white space-y-6">
                        <h1 className="text-4xl font-mono about-title">About Me</h1>
                        <div className="education bg-[#0B0B13] p-6 rounded-lg shadow-lg pl-16">
                            <h3 className="text-3xl text-[#2196F3] font-semibold">Education</h3>
                            <p className="text-lg mt-2 fpt-university">FPT University Hanoi</p>
                            <p className="text-lg fpt-university">Majoring in Software Engineering - GPA: 3.19/4</p>
                        </div>
                        <div className="about-buttons flex gap-4">
                            <Button className="btn-about btn-contact">
                                <span className="btn-content">
                                    <FiPhoneCall className="btn-icon" />
                                    Contact
                                </span>
                            </Button>
                            <Button className="btn-about btn-resume">
                                <span className="btn-content">
                                    <FiDownload className="btn-icon" />
                                    My Resumé
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="language mt-8 bg-[#0B0B13] p-6 rounded-lg shadow-lg text-white pl-16">
                    <h2 className="text-3xl font-semibold text-[#2196F3]">Languages</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ml-8">
                        <p className="text-lg language-english">English: Intermediate</p>
                        <p className="text-lg language-vietnamese">Vietnamese: Mother Tongue</p>
                        <p className="text-lg language-japanese">Japanese: Basic</p>
                    </div>
                </div>
                <div className="language mt-8 bg-[#0B0B13] p-6 rounded-lg shadow-lg text-white pl-16">
                    <h2 className="text-3xl font-semibold text-[#2196F3]">Skills</h2>
                    <div className="mt-4 space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold">Programming Languages</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                                <div className="flex items-center gap-2 skill-item skill-cplusplus">
                                    <SiCplusplus className="text-5xl" />
                                    <span>C/C++</span>
                                </div>
                                <div className="flex items-center gap-2 skill-item skill-java">
                                    <FaJava className="text-5xl" />
                                    <span>Java</span>
                                </div>
                                <div className="flex items-center gap-2 skill-item skill-javascript">
                                    <SiJavascript className="text-5xl" />
                                    <span>Javascript</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Frameworks & Libraries</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                                <div className="flex items-center gap-2 skill-item skill-react">
                                    <SiReact className="text-5xl" />
                                    <span>ReactJS</span>
                                </div>
                                <div className="flex items-center gap-2 skill-item skill-bootstrap">
                                    <SiBootstrap className="text-5xl" />
                                    <span>Bootstrap</span>
                                </div>
                                <div className="flex items-center gap-2 skill-item skill-tailwind">
                                    <SiTailwindcss className="text-5xl" />
                                    <span>TailwindCSS</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Tools</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                                <div className="flex items-center gap-2 skill-item skill-vscode">
                                    <VscVscode className="text-5xl" />
                                    <span>Visual Studio Code</span>
                                </div>
                                <div className="flex items-center gap-2 skill-item skill-intellij">
                                    <SiIntellijidea className="text-5xl" />
                                    <span>IntelliJ IDEA</span>
                                </div>
                                <div className="flex items-center gap-2 skill-item skill-github">
                                    <SiGithub className="text-5xl" />
                                    <span>Git/Github</span>
                                </div>
                                <div className="flex items-center gap-2 skill-item skill-sqlserver">
                                    <BsFiletypeSql className="text-5xl" />
                                    <span>SQL Server</span>
                                </div>
                                <div className="flex items-center gap-2 skill-item skill-mysql">
                                    <SiMysql className="text-5xl" />
                                    <span>MySQL</span>
                                </div>
                                <div className="flex items-center gap-2 skill-item skill-mongodb">
                                    <SiMongodb className="text-5xl" />
                                    <span>MongoDB</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Platform</h3>
                            <div className="flex items-center gap-2 skill-item skill-nodejs mt-2">
                                <FaNodeJs className="text-5xl" />
                                <span>Node.js</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
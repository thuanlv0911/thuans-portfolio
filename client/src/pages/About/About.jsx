import React from "react";
import "../About/about.css";
import profilePic from "../../assets/images/taxuaco.jpg";
import { Button } from "react-bootstrap";

const About = () => {
    return (
        <div className="min-h-screen bg-[#10101A] flex items-center justify-center px-4 sm:px-6 lg:px-16">
            <div className="about max-w-5xl w-full py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0 md:w-1/3">
                        <img
                            src={profilePic}
                            alt="Profile-picture"
                            className="about-img mx-auto md:mx-0"
                        />
                    </div>
                    <div className="flex-1 text-white space-y-6">
                        <h1 className="text-4xl font-bold about-title">About Me</h1>
                        <div className="education bg-[#0B0B13] p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl text-[#2196F3] font-semibold">Education</h3>
                            <p className="text-lg mt-2 fpt-university">FPT University - Hanoi</p>
                            <p className="text-lg fpt-university">Majoring in Software Engineering - GPA: 3.19/4</p>
                        </div>
                        <div className="about-buttons flex gap-4">
                            <Button className="btn-about">Contact Me</Button>
                            <Button className="btn-about">My Resumé</Button>
                        </div>
                    </div>
                </div>
                <div className="language mt-8 bg-[#0B0B13] p-6 rounded-lg shadow-lg text-white">
                    <h2 className="text-2xl font-semibold text-[#2196F3]">Languages</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        <p className="text-lg language-english">English: Intermediate</p>
                        <p className="text-lg language-vietnamese">Vietnamese: Mother Tongue</p>
                        <p className="text-lg language-japanese">Japanese: Basic</p>
                    </div>
                </div>
                <div className="skills mt-8 bg-[#0B0B13] p-6 rounded-lg shadow-lg text-white">
                    <h2 className="text-2xl font-semibold text-[#2196F3]">Skills</h2>
                    Programming languages: C/C++, Java, Javascript
                    Frameworks & libraries: ReactJS, Bootstrap, TailwindCSS
                    Tools: Visual Studio Code, IntelliJ IDEA, Git/Github, SQL Server, MySQL, MongoDB
                    Platform: Node.js
                </div>
            </div>
        </div>
    );
};

export default About;
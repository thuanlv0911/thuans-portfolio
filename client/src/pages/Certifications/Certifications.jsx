import React from 'react';
import "./certification.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiCoursera, SiCodeigniter } from "react-icons/si";
import { GrCycle } from "react-icons/gr";
import { RiCodeSSlashFill } from "react-icons/ri";
import { useTheme } from "../../context/ThemeContext";
import UXDesign from "../../assets/images/uxdesign.jpg";
import WebDesign from "../../assets/images/webdesign.jpg";
import SDLC from "../../assets/images/SDLC.jpg";

const Certifications = () => {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen flex items-center justify-center pb-20 ${theme === "light" ? "bg-[#10101A]" : "bg-[#fff]"}`} id="certifications">
            <div className="certifications w-full px-4 py-8">
                <h1 className={`text-4xl font-mono certifications-title ${theme === "light" ? "text-white" : "text-[#10101A]"}`}>Certifications</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: theme === "light" ? '#0B0B13' : '#eee',
                            color: theme === "light" ? '#fff' : '#10101A',
                            borderRadius: '0.5rem',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                        }}
                        contentArrowStyle={{ borderRight: `7px solid ${theme === "light" ? '#0B0B13' : '#eee'}` }}
                        date="September 2024"
                        iconStyle={{ background: '#2196F3', color: '#fff' }}
                        icon={<RiCodeSSlashFill />}
                    >
                        <div className="certification-content flex items-center">
                            <a href="https://coursera.org/share/d23a4162bd21bc329106c2b3d13fb71f" target="_blank" rel="noopener noreferrer" className="card-img-link w-4/12">
                                <div className="card-img-container relative">
                                    <img src={WebDesign} alt="Web Design" className="card-img rounded-lg" />
                                    <div className="card-overlay">Link</div>
                                </div>
                            </a>
                            <div className="w-8/12 pl-4">
                                <h2 className="certification-title text-2xl font-semibold">Basics of Web Development & Coding</h2>
                                <span className={`coursera-pill ${theme === "light" ? "bg-white text-[#2196F3]" : "bg-[#10101A]"}`}>
                                    <span className="coursera-text">Coursera</span>
                                    <SiCoursera className="coursera-logo" />
                                </span>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: theme === "light" ? '#0B0B13' : '#eee',
                            color: theme === "light" ? '#fff' : '#10101A',
                            borderRadius: '0.5rem',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                        }}
                        contentArrowStyle={{ borderRight: `7px solid ${theme === "light" ? '#0B0B13' : '#eee'}` }}
                        date="January 2025"
                        iconStyle={{ background: '#2196F3', color: '#fff' }}
                        icon={<GrCycle />}
                    >
                        <div className="certification-content flex items-center">
                            <a href="https://coursera.org/share/c658b57c47424083651ebe30dee6f001" target="_blank" rel="noopener noreferrer" className="card-img-link w-4/12">
                                <div className="card-img-container relative">
                                    <img src={SDLC} alt="Software Development Lifecycle" className="card-img rounded-lg" />
                                    <div className="card-overlay">Link</div>
                                </div>
                            </a>
                            <div className="w-8/12 pl-4">
                                <h2 className="certification-title text-2xl font-semibold">Software Development Lifecycle</h2>
                                <span className={`coursera-pill ${theme === "light" ? "bg-white text-[#2196F3]" : "bg-[#10101A]"}`}>
                                    <span className="coursera-text">Coursera</span>
                                    <SiCoursera className="coursera-logo" />
                                </span>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: theme === "light" ? '#0B0B13' : '#eee',
                            color: theme === "light" ? '#fff' : '#10101A',
                            borderRadius: '0.5rem',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                        }}
                        contentArrowStyle={{ borderRight: `7px solid ${theme === "light" ? '#0B0B13' : '#eee'}` }}
                        date="May 2025"
                        iconStyle={{ background: '#2196F3', color: '#fff' }}
                        icon={<SiCodeigniter />}
                    >
                        <div className="certification-content flex items-center">
                            <a href="https://coursera.org/share/a7baf684a1d8d9e34543485b99a6ba4b" target="_blank" rel="noopener noreferrer" className="card-img-link w-4/12">
                                <div className="card-img-container relative">
                                    <img src={UXDesign} alt="UX Design" className="card-img rounded-lg" />
                                    <div className="card-overlay">Link</div>
                                </div>
                            </a>
                            <div className="w-8/12 pl-4">
                                <h2 className="certification-title text-2xl font-semibold">User Experience Research and Design</h2>
                                <span className={`coursera-pill ${theme === "light" ? "bg-white text-[#2196F3]" : "bg-[#10101A]"}`}>
                                    <span className="coursera-text">Coursera</span>
                                    <SiCoursera className="coursera-logo" />
                                </span>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Certifications;
import React from 'react';
import "./certification.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CgWebsite } from "react-icons/cg";
import { SiCoursera } from "react-icons/si";
import UXDesign from "../../assets/images/uxdesign.jpg";
import WebDesign from "../../assets/images/webdesign.jpg";
import SDLC from "../../assets/images/SDLC.jpg";

const Certifications = () => {
    return (
        <div className="min-h-screen bg-[#10101A] flex items-center justify-center">
            <div className="certifications w-full px-4 py-8">
                <h1 className="text-4xl font-mono certifications-title">Certifications</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#0B0B13', color: '#fff', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                        contentArrowStyle={{ borderRight: '7px solid #0B0B13' }}
                        date="September 2024"
                        iconStyle={{ background: '#2196F3', color: '#fff' }}
                        icon={<CgWebsite />}
                    >
                        <div className="certification-content flex items-center">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="card-img-link w-4/12">
                                <div className="card-img-container relative">
                                    <img src={WebDesign} alt="Web Design" className="card-img rounded-lg" />
                                    <div className="card-overlay">Link</div>
                                </div>
                            </a>
                            <div className="w-8/12 pl-4">
                                <h2 className="certification-title text-2xl font-semibold">Basics of Web Development & Coding</h2>
                                <span className="coursera-pill">
                                    <span className="coursera-text">Coursera</span>
                                    <SiCoursera className="coursera-logo" />
                                </span>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#0B0B13', color: '#fff', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                        contentArrowStyle={{ borderRight: '7px solid #0B0B13' }}
                        date="January 2025"
                        iconStyle={{ background: '#2196F3', color: '#fff' }}
                        icon={<CgWebsite />}
                    >
                        <div className="certification-content flex items-center">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="card-img-link w-4/12">
                                <div className="card-img-container relative">
                                    <img src={SDLC} alt="Software Development Lifecycle" className="card-img rounded-lg" />
                                    <div className="card-overlay">Link</div>
                                </div>
                            </a>
                            <div className="w-8/12 pl-4">
                                <h2 className="certification-title text-2xl font-semibold">Software Development Lifecycle</h2>
                                <span className="coursera-pill">
                                    <span className="coursera-text">Coursera</span>
                                    <SiCoursera className="coursera-logo" />
                                </span>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#0B0B13', color: '#fff', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                        contentArrowStyle={{ borderRight: '7px solid #0B0B13' }}
                        date="May 2025"
                        iconStyle={{ background: '#2196F3', color: '#fff' }}
                        icon={<CgWebsite />}
                    >
                        <div className="certification-content flex items-center">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="card-img-link w-4/12">
                                <div className="card-img-container relative">
                                    <img src={UXDesign} alt="UX Design" className="card-img rounded-lg" />
                                    <div className="card-overlay">Link</div>
                                </div>
                            </a>
                            <div className="w-8/12 pl-4">
                                <h2 className="certification-title text-2xl font-semibold">User Experience Research and Design</h2>
                                <span className="coursera-pill">
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
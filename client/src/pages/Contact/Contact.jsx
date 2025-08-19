import React from 'react';
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";


const Contact = () => {
    return (
        <div className="min-h-screen bg-[#10101A] flex items-center justify-center" >
            <div className="contact w-full px-4 py-8 max-w-7xl mx-auto" id="contact">
                <h1 className="text-4xl font-mono contact-title" >Contact</h1>
                <div className="contact-container gap-6 mt-8 flex flex-col md:flex-row" >
                    <div className="contact-info bg-[#0B0B13] p-6 rounded-lg shadow-lg md:w-1/3">
                        <h2 className="text-3xl font-semibold text-[#2196F3] mb-4">Get in Touch</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 contact-item">
                                <HiOutlineMail className="text-2xl transition-all duration-300" />
                                <span className="transition-all duration-300">thuanlv0911@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 contact-item">
                                <FiPhone className="text-2xl transition-all duration-300" />
                                <span className="transition-all duration-300">(+84) 964 405 117</span>
                            </div>
                            <div className="flex items-center gap-3 contact-item">
                                <FiMapPin className="text-2xl transition-all duration-300" />
                                <span className="transition-all duration-300">Hanoi, Vietnam</span>
                            </div>
                            <hr className="border-[#2196F3] my-4" />
                            <h3 className="text-xl font-semibold text-[#2196F3]">Contact with</h3>
                            <div className="mxh-icons flex justify-center md:justify-start gap-6 mt-4">
                                <a href="https://www.facebook.com/thuanlv0911" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF
                                        size={40}
                                        className="p-2 rounded-full bg-[#1877F2] text-white border-1 border-white
                       hover:scale-110 hover:border-[#1877F2] transition-all duration-200 shadow-lg"
                                        title="Facebook"
                                    />
                                </a>
                                <a href="https://www.instagram.com/thuanlv0911" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram
                                        size={40}
                                        className="p-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white 
                       border-1 border-white hover:scale-110 hover:border-pink-500 
                       transition-all duration-200 shadow-lg"
                                        title="Instagram"
                                    />
                                </a>
                                <a href="https://github.com/thuanlv0911" target="_blank" rel="noopener noreferrer">
                                    <FaGithub
                                        size={40}
                                        className="p-2 rounded-full bg-black text-white border-1 border-white
                       hover:scale-110 hover:border-black transition-all duration-200 shadow-lg"
                                        title="GitHub"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form bg-[#0B0B13] p-6 rounded-lg shadow-lg md:w-2/3">
                        <h2 className="text-3xl font-semibold text-[#2196F3] mb-4">Get in Contact</h2>
                        <form>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full p-3 bg-[#1A1A22] text-white rounded-lg border border-[#2196F3] focus:outline-none focus:ring-2 focus:ring-[#2196F3]"
                                />
                            </div>
                            <div className="flex gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full p-3 bg-[#1A1A22] text-white rounded-lg border border-[#2196F3] focus:outline-none focus:ring-2 focus:ring-[#2196F3]"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 bg-[#1A1A22] text-white rounded-lg border border-[#2196F3] focus:outline-none focus:ring-2 focus:ring-[#2196F3]"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    placeholder="Message"
                                    className="w-full p-3 bg-[#1A1A22] text-white rounded-lg border border-[#2196F3] focus:outline-none focus:ring-2 focus:ring-[#2196F3] h-32 resize-none"
                                ></textarea>
                            </div>
                            <Button className="btn-about btn-send-message">
                                <span className="btn-content">
                                    <IoMailUnreadOutline className="btn-icon" />
                                    Send Message
                                </span>
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="bg-[#0B0B13] p-6 rounded-lg shadow-lg mt-10">
                    <div className="flex flex-col justify-center align-items-center">
                        <h3 className="text-xl font-semibold text-[#2196F3]">Let’s Work Together</h3>
                        <div className="flex items-center gap-3 contact-item">
                            ..........<FaHandshake className="text-2xl transition-all duration-300" />..........
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
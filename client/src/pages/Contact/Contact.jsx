import React from 'react';
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { Button } from "react-bootstrap";

const Contact = () => {
    return (
        <div className="min-h-screen bg-[#10101A] flex items-center justify-center">
            <div className="contact w-full px-4 py-8 max-w-7xl mx-auto">
                <h1 className="text-4xl font-mono contact-title">Contact</h1>
                <div className="contact-container gap-6 mt-8 flex flex-col md:flex-row">
                    <div className="contact-info flex flex-col align-items-center bg-[#0B0B13] p-6 rounded-lg shadow-lg md:w-1/3">
                        <h2 className="text-3xl font-semibold text-[#2196F3] mb-4">Get in Touch</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 contact-item">
                                <HiOutlineMail className="text-2xl  transition-all duration-300" />
                                <span className=" transition-all duration-300">thuanlv0911@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 contact-item">
                                <FiPhone className="text-2xl  transition-all duration-300" />
                                <span className=" transition-all duration-300">(+84) 964 405 117</span>
                            </div>
                            <div className="flex items-center gap-3 contact-item">
                                <FiMapPin className="text-2xl transition-all duration-300" />
                                <span className=" transition-all duration-300">Hanoi, Vietnam</span>
                            </div>
                            <hr className='text-white' />

                        </div>
                    </div>
                    <div className="contact-form bg-[#0B0B13] p-6 rounded-lg shadow-lg md:w-2/3">
                        <h2 className="text-3xl font-semibold text-[#2196F3] mb-4">Send me a message</h2>
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
            </div>
        </div>
    );
};

export default Contact;
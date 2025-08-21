import React, { useRef } from 'react';
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 0.5, ease: "easeOut" }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    },
    exit: {
        opacity: 0,
        transition: { staggerChildren: 0.15, staggerDirection: -1 }
    }
};

const infoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 120, damping: 12, duration: 0.6 }
    },
    exit: {
        opacity: 0,
        x: -50,
        transition: { duration: 0.5, ease: "easeIn" }
    }
};

const contactItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.5 }
    }
};

const mxhIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.5 }
    },
    hover: {
        scale: 1.15,
        transition: { type: "spring", stiffness: 300, damping: 10 }
    }
};

const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 120, damping: 12, duration: 0.6 }
    },
    exit: {
        opacity: 0,
        x: 50,
        transition: { duration: 0.5, ease: "easeIn" }
    }
};

const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.5 }
    }
};

const handshakeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 }
    },
    exit: {
        opacity: 0,
        y: -50,
        transition: { duration: 0.5, ease: "easeIn" }
    }
};

const handshakeIconVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.5 }
    }
};

const Contact = () => {
    const { theme } = useTheme();
    const containerRef = useRef(null);
    const handshakeRef = useRef(null);
    const isContainerInView = useInView(containerRef, { once: false, margin: "-50px" });
    const isHandshakeInView = useInView(handshakeRef, { once: false, margin: "-50px" });

    return (
        <div className={`min-h-screen flex items-center justify-center ${theme === "light" ? "bg-[#10101A]" : "bg-[#fff]"}`} id="contact">
            <div className="contact w-full px-4 py-8 max-w-7xl mx-auto">
                <motion.h1
                    variants={titleVariants}
                    initial="hidden"
                    animate={isContainerInView ? "visible" : "hidden"}
                    className={`text-4xl font-mono contact-title ${theme === "light" ? "text-white" : "text-[#10101A]"}`}
                >
                    Contact
                </motion.h1>
                <motion.div
                    ref={containerRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isContainerInView ? "visible" : "exit"}
                    className="contact-container gap-6 mt-8 flex flex-col md:flex-row"
                >
                    <motion.div
                        variants={infoVariants}
                        className={`contact-info p-6 rounded-lg md:w-1/3 ${theme === "light" ? "bg-[#0B0B13]" : "bg-[#eee]"}`}
                    >
                        <h2 className="text-3xl font-semibold text-[#2196F3] mb-4">Get in Touch</h2>
                        <div className="space-y-4">
                            {[
                                { icon: <HiOutlineMail className="text-2xl transition-all duration-300" />, text: "thuanlv0911@gmail.com" },
                                { icon: <FiPhone className="text-2xl transition-all duration-300" />, text: "(+84) 964 405 117" },
                                { icon: <FiMapPin className="text-2xl transition-all duration-300" />, text: "Hanoi, Vietnam" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={contactItemVariants}
                                    className={`flex items-center gap-3 contact-item ${theme === "light" ? "text-white" : "text-[#10101A]"}`}
                                >
                                    {item.icon}
                                    <span className="transition-all duration-300">{item.text}</span>
                                </motion.div>
                            ))}
                            <hr className="border-[#2196F3] my-4" />
                            <h3 className="text-xl font-semibold text-[#2196F3]">Contact with</h3>
                            <div className="mxh-icons flex justify-center md:justify-start gap-6 mt-4">
                                {[
                                    { href: "https://www.facebook.com/thuanlv0911", icon: <FaFacebookF size={40} className={`p-2 rounded-full bg-[#1877F2] ${theme === "light" ? "text-white border-white" : "text-white border-[#10101A]"} border-1 hover:scale-110 hover:border-[#1877F2] transition-all duration-200 shadow-lg`} />, title: "Facebook" },
                                    { href: "https://www.instagram.com/thuanlv0911", icon: <FaInstagram size={40} className={`p-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 ${theme === "light" ? "text-white border-white" : "text-white border-[#10101A]"} border-1 hover:scale-110 hover:border-pink-500 transition-all duration-200 shadow-lg`} />, title: "Instagram" },
                                    { href: "https://github.com/thuanlv0911", icon: <FaGithub size={40} className={`p-2 rounded-full bg-black ${theme === "light" ? "text-white border-white" : "text-white border-[#10101A]"} border-1 hover:scale-110 hover:border-black transition-all duration-200 shadow-lg`} />, title: "GitHub" }
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variants={mxhIconVariants}
                                        whileHover="hover"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={formVariants}
                        className={`contact-form p-6 rounded-lg md:w-2/3 ${theme === "light" ? "bg-[#0B0B13]" : "bg-[#eee]"}`}
                    >
                        <h2 className="text-3xl font-semibold text-[#2196F3] mb-4">Get in Contact</h2>
                        <form>
                            <motion.div variants={inputVariants} className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className={`w-full p-3 rounded-lg border border-[#2196F3] focus:outline-none focus:ring-2 focus:ring-[#2196F3] ${theme === "light" ? "bg-[#1A1A22] text-white" : "bg-[#fff] text-[#10101A]"}`}
                                />
                            </motion.div>
                            <motion.div variants={containerVariants} className="flex gap-4 mb-4">
                                <motion.input
                                    variants={inputVariants}
                                    type="text"
                                    placeholder="Name"
                                    className={`w-full p-3 rounded-lg border border-[#2196F3] focus:outline-none focus:ring-2 focus:ring-[#2196F3] ${theme === "light" ? "bg-[#1A1A22] text-white" : "bg-[#fff] text-[#10101A]"}`}
                                />
                                <motion.input
                                    variants={inputVariants}
                                    type="email"
                                    placeholder="Email"
                                    className={`w-full p-3 rounded-lg border border-[#2196F3] focus:outline-none focus:ring-2 focus:ring-[#2196F3] ${theme === "light" ? "bg-[#1A1A22] text-white" : "bg-[#fff] text-[#10101A]"}`}
                                />
                            </motion.div>
                            <motion.div variants={inputVariants} className="mb-4">
                                <textarea
                                    placeholder="Message"
                                    className={`w-full p-3 rounded-lg border border-[#2196F3] focus:outline-none focus:ring-2 focus:ring-[#2196F3] h-32 resize-none ${theme === "light" ? "bg-[#1A1A22] text-white" : "bg-[#fff] text-[#10101A]"}`}
                                ></textarea>
                            </motion.div>
                            <Button className={`btn-about btn-send-message ${theme === "light" ? "text-[#10101A]" : "text-white"}`}>
                                <span className="btn-content">
                                    <IoMailUnreadOutline className="btn-icon" />
                                    Send Message
                                </span>
                            </Button>
                        </form>
                    </motion.div>
                </motion.div>
                <motion.div
                    ref={handshakeRef}
                    variants={handshakeVariants}
                    initial="hidden"
                    animate={isHandshakeInView ? "visible" : "exit"}
                    className={`p-6 rounded-lg mt-10 ${theme === "light" ? "bg-[#0B0B13]" : "bg-[#eee]"}`}
                >
                    <div className="flex flex-col justify-center align-items-center">
                        <h3 className="text-xl font-semibold text-[#2196F3]">Let’s Work Together</h3>
                        <motion.div
                            variants={handshakeIconVariants}
                            className={`flex items-center gap-3 contact-item ${theme === "light" ? "text-white" : "text-[#10101A]"}`}
                        >
                            ...........<FaHandshake className="text-2xl transition-all duration-300" />...........
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
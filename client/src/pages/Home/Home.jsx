import React from 'react';
import './home.css';
import Typewriter from 'typewriter-effect';
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import profilePic from '../../assets/images/hxx.jpg';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen px-16">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-8 px-4">
                <div className="home-content flex-1">
                    <h2 className="text-3xl">👋Hi, I'm</h2>
                    <h1 className="text-5xl font-bold text-blue-500">Le Van Thuan</h1>
                    <h2 className="flex justify-center md:justify-start items-center gap-2 text-2xl">
                        I am a
                        <span>
                            <Typewriter
                                options={{
                                    strings: ['Front-end Developer!', 'Software Engineer!'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h2>
                    <p className="text-lg mt-3">
                        I am a Front-end Developer with a passion for creating beautiful and functional user interfaces. I have experience in React, JavaScript, and CSS, and I love to learn new technologies.
                    </p>
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

                    <div className="home-button mt-4">
                        <Button className="btn btn-about">About me</Button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <img src={profilePic} alt="Profile-picture" className="profile-pic mx-auto md:mx-0"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
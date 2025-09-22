// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import Home from "../../pages/Home/Home";
import "./layout.css";
import Menus from "../Menus/Menus";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
import Certifications from "../../pages/Certifications/Certifications";
import Contact from "../../pages/Contact/Contact";

export default function Layout() {
    const { scrollYProgress } = useScroll();

    const background = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [
            "linear-gradient(to bottom, #3b82f6, #06b6d4)",
            "linear-gradient(to bottom, #10b981, #059669)",
            "linear-gradient(to bottom, #3b82f6, #06b6d4)"
        ]
    );

    return (
        <>
            <div className="sidebar-section">
                <div className="sidebar">
                    <Menus />
                </div>
                <div className="container">
                    <Home />
                    <About />
                    <Projects />
                    <Certifications />
                    <Contact />
                </div>
            </div>
            <motion.div
                className="progress-bar"
                style={{ scaleY: scrollYProgress, background }}
            />
        </>
    );
}
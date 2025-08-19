import Home from "../../pages/Home/Home";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import "./layout.css";
import { useState } from "react";
import Menus from "../Menus/Menus";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
import Certifications from "../../pages/Certifications/Certifications";
import Contact from "../../pages/Contact/Contact";

export default function Layout() {

    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <div className="sidebar-section">
                <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
                    <div className="sidebar-toggle-icons">
                        <p onClick={handleToggle} className="toggle-icon">
                            {toggle ? (<GoSidebarExpand className="hover:text-blue-500" size={30} />) :
                                (<GoSidebarCollapse size={30} className="hover:text-blue-500" />)}
                        </p>
                    </div>
                    <Menus toggle={toggle} />
                </div>
                <div className="container">
                    <Home />
                    <About />
                    <Projects />
                    <Certifications />
                    <Contact />
                </div>
            </div >

        </>
    )
}
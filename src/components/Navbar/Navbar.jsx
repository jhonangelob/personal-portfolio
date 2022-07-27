import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">jhn</div>
      <div className="app__navbar-menu">
        {!toggle && <HiMenu onClick={() => setToggle(true)} />}
        {toggle && (
          <motion.div>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "Header",
                "About",
                "Projects",
                "Technologies",
                "Experience",
                "Contact",
              ].map((item) => (
                <li className="li-text" key={`link-${item}`}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

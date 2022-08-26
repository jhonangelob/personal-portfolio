import { motion, useCycle } from "framer-motion";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.scss";

const links = ["home", "about", "projects", "experience", "contact"];

const Navbar = () => {
  const [open, cycleOpen] = useCycle(true, false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (
      (window.scrollY >= window.innerHeight - 70 &&
        window.scrollY < window.innerHeight * 2 - 70) ||
      (window.scrollY >= window.innerHeight * 3 - 70 &&
        window.scrollY < window.innerHeight * 4 - 70)
    ) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className={colorChange ? "app__navbar dark" : "app__navbar light"}
    >
      <span className="app__navbar-logo">jhn</span>
      <div className="app__navbar-menu">
        {open ? (
          <HiMenu onClick={cycleOpen} />
        ) : (
          <motion.div className="app__navbar-expanded">
            <HiX onClick={cycleOpen} />
            <motion.ul
              whileInView={{ x: [100, 0] }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {links.map((link) => (
                <li key={`${link}-link`} className={`${link}-link`}>
                  <a href={`#${link}`} onClick={cycleOpen}>
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

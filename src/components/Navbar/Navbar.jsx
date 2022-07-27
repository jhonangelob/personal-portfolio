import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= window.innerHeight - 70) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav className={colorChange ? "app__navbar dark" : "app__navbar light"}>
      <div className="app__navbar-logo">jhn</div>
      <div className="app__navbar-menu">
        {!toggle ? (
          <HiMenu onClick={() => setToggle(true)} />
        ) : (
          <motion.div className="app__navbar-expanded">
            <HiX onClick={() => setToggle(false)} />
            <motion.ul
              whileInView={{ x: [100, 0] }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {["home", "about", "projects", "experience", "contact"].map(
                (item) => (
                  <li key={`link-${item}`} className={`link-${item}`}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </motion.ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
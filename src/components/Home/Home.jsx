import { motion } from "framer-motion";
import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import AppWrap from "../../wrapper/AppWrap";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h1 className="app__hero-name">Jhon Angelo</h1>
        <h3 className="app__hero-title">Web Developer</h3>
        <p className="app__hero-desc">
          A Bachelor of Science in Information Technology graduate at the
          Philippine's first Polytechnic University.
        </p>
        <a href="#contact">
          Let's Talk <HiArrowSmRight />
        </a>
      </motion.div>
    </>
  );
};

export default AppWrap(Home, "home", "app__home");

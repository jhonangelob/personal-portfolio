import React from "react";
import "./Home.scss";
import AppWrap from "../../wrapper/AppWrap";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="app__hero-name">Jhon Angelo</h1>
        <h3 className="app__hero-title">web developer</h3>
        <p className="app__hero-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante
          dui, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec ante dui, consectetur.
        </p>
        <a
          href="../../assets/file/BUSTARDE, Jhon Angelo .pdf"
          target="_blank"
          rel="noreferrer"
          className="download__link"
        >
          <span>Download CV</span>
        </a>
      </motion.div>
    </>
  );
};

export default AppWrap(Home, "home", "app__home");

import React, { useState, useEffect } from "react";
import "./Home.scss";
import AppWrap from "../../wrapper/AppWrap";
import { motion } from "framer-motion";
import { getResume } from "../../configs/useContentful";

const Home = () => {
  const [file, setFile] = useState([]);
  useEffect(() => {
    getResume().then((response) => response && setFile(response));
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h1 className="app__hero-name">Jhon Angelo</h1>
        <h3 className="app__hero-title">web developer</h3>
        <p className="app__hero-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante
          dui, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec ante dui, consectetur.
        </p>
        {file?.map((file) => (
          <a
            href={file.download.file.url}
            target="_blank"
            rel="noreferrer"
            className="download__link"
            key={`key-${file.index}`}
          >
            <span>Download CV</span>
          </a>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Home, "home", "app__home");

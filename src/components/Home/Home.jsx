import React, { useState, useEffect } from "react";
import Modal from "./Modal/Modal";
import { motion } from "framer-motion";
import { getResume } from "../../configs/useContentful";
import AppWrap from "../../wrapper/AppWrap";
import "./Home.scss";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [file, setFile] = useState([]);
  console.log(file);

  useEffect(() => {
    getResume().then((response) => response && setFile(response));
  }, []);

  return (
    <>
      <Modal
        open={openModal}
        setFile={setFile}
        file={file}
        closeModal={() => setOpenModal(false)}
      />
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
        {file?.map((file) => (
          <button
            onClick={() => setOpenModal(true)}
            className="download__link"
            key={`key-${file.index}`}
          >
            <span>Know More</span>
          </button>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Home, "home", "app__home");

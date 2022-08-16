import { motion } from "framer-motion";
import React from "react";
import images from "../../constants/images";
import AppWrap from "../../wrapper/AppWrap";
import "./Experience.scss";

const Experience = () => {
  return (
    <>
      <motion.h1 whileInView={{ opacity: [0, 1] }} transition={{ duration: 1 }}>
        My Web Development <span>Technologies</span> and <span>Experience</span>
        .
      </motion.h1>
      <div className="app__experience-cont">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="tech_cont"
        >
          <h4>Technologies</h4>
          <p>
            <em>These are the technologies I use for front-end development</em>{" "}
          </p>
          <div className="app__experience-card">
            <img src={images.html} alt="html" />
            <img src={images.css} alt="css" />
            <img src={images.reactjs} alt="react" />
            <img src={images.sass} alt="sass" />
            <img src={images.javascript} alt="javascript" />
            <img src={images.bootstrap} alt="bootstrap" />
          </div>
          <p>
            <em>These are the technologies I use for back-end development</em>{" "}
          </p>
          <div className="app__experience-card">
            <img src={images.nodejs} alt="nodejs" />
            <img src={images.firebase} alt="firebase" />
          </div>
          <p>
            <em>Others...</em>{" "}
          </p>
          <div className="app__experience-card">
            <img src={images.git} alt="git" />
            <img src={images.npm} alt="npm" />
            <img src={images.figma} alt="figma" />
            <img src={images.contentful} alt="contentful" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="exp_cont"
        >
          <h4>Experience</h4>
          <p>2022</p>
          <p className="exp-title">Web Developer Intern</p>
          <p>Symph, Inc.</p>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Experience, "experience", "app__experience");

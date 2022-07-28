import React from "react";
import "./Projects.scss";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";

const Projects = () => {
  return (
    <>
      <div className="app__projects">
        <h1>Projects</h1>
        <ul>
          <li>Home Aide</li>
          <li>Portfolio</li>
          <li>Todo App</li>
          <li>Movie App</li>
          <li>Portfolio V2</li>
        </ul>
        <motion.div className="app__projects-details">
          <p className="app__project-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante
            dui, consectetur.
          </p>
          <p className="app__project-tech">Built using PHP, MySQL, Bootstrap</p>
          <div className="controls">
            <a
              href="https://github.com/jhonangeloB/portfolio"
              className="project__view-btn"
            >
              View
            </a>
            <a
              href="https://github.com/jhonangeloB/portfolio"
              className="project__repo-btn"
            >
              Source
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Projects, "projects", "app__projects");

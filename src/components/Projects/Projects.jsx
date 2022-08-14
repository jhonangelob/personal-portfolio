import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import { getProjects } from "../../configs/useContentful";
import "./Projects.scss";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects().then((response) => response && setProjects(response));
  }, []);
  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <h1>Projects</h1>
        <div className="app__projects-container">
          {projects?.map((project) => (
            <motion.div
              whileHover={{
                border: "1px solid #303030",
              }}
              whileInView={{ opacity: [0, 1], y: [40, 0] }}
              transition={{ duration: 0.5 }}
              className="app__projects-card"
              key={`${project.name}-card`}
            >
              <p className="app__project-title">{project.name}</p>
              <p className="app__project-desc">{project.description}</p>
              <ul className="app__project-tech">
                {project.technology?.map((tech) => (
                  <li key={`${tech}-technology`}>{tech}</li>
                ))}
              </ul>
              <div className="controls">
                <a href={project.projectLink} className="project__view-btn">
                  View
                </a>
                <a href={project.codeLink} className="project__repo-btn">
                  Source
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default AppWrap(Projects, "projects", "app__projects");

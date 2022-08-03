import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import "./Experience.scss";

const Experience = () => {
  const [active, setActive] = useState("tech");

  return (
    <>
      <div className="cont">
        <motion.h1
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          My Web Development{" "}
          <span
            className={`tech-btn ${active === "tech" ? "active" : ""}`}
            onClick={() => setActive("tech")}
          >
            Technologies
          </span>{" "}
          and{" "}
          <span
            className={`exp-btn ${active === "exp" ? "active" : ""}`}
            onClick={() => setActive("exp")}
          >
            Experience
          </span>
          .{" "}
        </motion.h1>
        <AnimatePresence>
          {active === "tech" ? (
            <motion.div
              key={"tech"}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="tech_cont"
            >
              <p>
                I specialize in Front-End Web Development with{" "}
                <span>React</span>, <span>JavaScript</span>,{" "}
                <span>Bootstrap</span>, and <span>Sass</span>. As well as{" "}
                <span>node.js</span> and <span>Firebase</span> for the backend
                and database.
              </p>
              <p>Among other technologies that I use are:</p>
              <p>
                <span>Git</span> for version control
              </p>
              <p>
                <span>Figma</span> for UI/UX Design
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={"exp"}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="exp-cont"
            >
              <p>2022</p>
              <p className="exp-title">Web Developer Intern</p>
              <p>Symph, Inc.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AppWrap(Experience, "experience", "app__experience");

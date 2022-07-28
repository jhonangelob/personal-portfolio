import React, { useState } from "react";
import AppWrap from "../../wrapper/AppWrap";
import { motion } from "framer-motion";
import "./Experience.scss";

const Experience = () => {
  const [active, setActive] = useState("tech");

  return (
    <>
      <div className="cont">
        <motion.h1
          exit={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          My web development{" "}
          <span className="tech-btn" onClick={() => setActive("tech")}>
            technologies
          </span>{" "}
          and{" "}
          <span className="exp-btn" onClick={() => setActive("exp")}>
            experience
          </span>
          .{" "}
        </motion.h1>

        {active === "tech" ? (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="tech_cont"
          >
            <p>
              I specialize in Web Development using <span>React</span>,{" "}
              <span>JavaScript</span>, and <span>Sass</span> for the front-end
              part. And <span>node.js</span>, firestore <span>Firebase</span>{" "}
              for the backend part and database.
            </p>
            <p>
              I also have some experience developing website using{" "}
              <span>PHP</span>, <span>MySQL</span>, and <span>Bootstrap</span>.
            </p>
            <p>For the version control,</p>
            <p>
              what I use is <span>Git</span> And for the UI/UX Designing. My
              preffered tool is <span>Figma</span>.
            </p>
          </motion.div>
        ) : (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="exp-cont"
          >
            <p>2022</p>
            <p className="exp-title">Web Developer Intern</p>
            <p>Symph, Inc.</p>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default AppWrap(Experience, "experience", "app__experience");

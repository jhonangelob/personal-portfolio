import React from "react";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import "./About.scss";

const About = () => {
  return (
    <>
      <div>
        <motion.h1
          className="about__text"
          whileInView={{ opacity: [1, 1] }}
          transition={{ delay: 0.3 }}
        >
          I specializes in{" "}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1] }}
          >
            Front-end
          </motion.span>{" "}
          Web Development and{" "}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1] }}
          >
            UI/UX
          </motion.span>{" "}
          Design.
        </motion.h1>
      </div>
    </>
  );
};

export default AppWrap(About, "about", "app__about");

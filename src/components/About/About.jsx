import React from "react";
import "./About.scss";
import AppWrap from "../../wrapper/AppWrap";

const About = () => {
  return (
    <>
      <div className="app__about">
        <h1>
          I specialize in <span>Web Development</span> and <span>UI/UX</span>{" "}
          Design.
        </h1>
      </div>
    </>
  );
};

export default AppWrap(About, "about", "app__about");

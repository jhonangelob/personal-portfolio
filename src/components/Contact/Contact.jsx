import React, { useRef } from "react";
import AppWrap from "../../wrapper/AppWrap";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_API_KEY
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

    e.target.reset();
  };

  return (
    <>
      <motion.h1
        exit={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        Contact{" "}
      </motion.h1>
      <div className="app__contact-cont">
        <div className="app__contact-form">
          <h2>
            Any{" "}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1] }}
            >
              Question?
            </motion.span>
          </h2>
          <h3>Just write a message</h3>
          <form onSubmit={handleSubmit} ref={form}>
            <motion.input
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              type="text"
              placeholder="Your Name"
              name="name"
            />
            <motion.input
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.4 }}
              type="text"
              placeholder="Your Email"
              name="email"
            />
            <motion.textarea
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.6 }}
              placeholder="Your Message"
              cols="30"
              rows="4"
              name="message"
            />
            <motion.button
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.8 }}
              type="submit"
            >
              SEND
            </motion.button>
          </form>
        </div>
        <motion.div
          exit={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 1 }}
          className="app__contact-address"
        >
          <h4>Stay Connected</h4>
          <p className="location">Calamba, Laguna</p>
          <p>bustarde.aj@gmail.com</p>
          <div className="app__contact-icons">
            <a href="https://github.com/jhonangeloB">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jhonangelob/">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/sqmbi">
              <FaFacebook />
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Contact, "contact", "app__contact");

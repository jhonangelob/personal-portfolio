import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { getResume } from "../../configs/useContentful";
import AppWrap from "../../wrapper/AppWrap";
import "./Contact.scss";

const Contact = () => {
  const [file, setFile] = useState([]);

  useEffect(() => {
    getResume().then((response) => response && setFile(response));
  }, []);
  const [sending, setSending] = useState(false);
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
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
          setTimeout(() => {
            setSending(false);
          }, 2000);
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
          <h3>
            Leave a <span>message</span>
          </h3>
          <form onSubmit={handleSubmit} ref={form}>
            <motion.input
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              type="text"
              placeholder="Your Name"
              name="name"
              required
            />
            <motion.input
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.4 }}
              type="text"
              placeholder="Your Email"
              name="email"
              required
            />
            <motion.textarea
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.6 }}
              placeholder="Your Message"
              cols="30"
              rows="4"
              name="message"
              required
            />
            <motion.button
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.8 }}
              type="submit"
              style={{
                backgroundColor: sending ? "#fff" : "#000",
                color: sending ? "#000" : "#fff",
              }}
            >
              {!sending ? "SEND" : "SENDING..."}
            </motion.button>
          </form>
        </div>
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__contact-address"
        >
          <h4>Stay Connected</h4>
          <p className="location">Calamba, Laguna</p>
          <p className="email">bustarde.aj@gmail.com</p>
          <div className="app__contact-icons">
            <a href="https://github.com/jhonangeloB">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jhonangelob/">
              <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com/sqmbi">
              <FaFacebook />
            </a>
          </div>
          {file?.map((file, index) => (
            <div className="app__contact-links">
              <p>
                Download my{" "}
                <a href={file.download.file.url} download>
                  Resume
                </a>
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Contact, "contact", "app__contact");

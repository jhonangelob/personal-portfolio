import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Modal.scss";

const Modal = ({ ...props }) => {
  if (!props.open) return null;
  console.log(props.file);
  return (
    <div className="app__modal-overlay" onClick={props.closeModal}>
      {props.file?.map((download) => (
        <motion.div
          className="app__modal"
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.3 }}
        >
          <div className="app__modal-header">
            <button onClick={props.closeModal}>
              <AiOutlineClose />
            </button>
          </div>

          <div className="app__modal-content">
            <iframe
              title="file"
              src={`${download.download.file.url}#view=FitH&toolbar=0`}
            />
          </div>

          <div className="app__modal-controls">
            <a
              href={download.download.file.url}
              className="download__link"
              download
            >
              Get a copy
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Modal;

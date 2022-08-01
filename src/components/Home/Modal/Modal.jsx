import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Modal.scss";

const Modal = ({ ...props }) => {
  if (!props.open) return null;
  console.log(props.file);
  return (
    <>
      {props.file?.map((download) => (
        <div className="app__modal">
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
        </div>
      ))}
    </>
  );
};

export default Modal;

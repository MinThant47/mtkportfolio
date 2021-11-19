import "./Modal.css";
import { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Modal = ({ open, setOpen, data, setSelectedData }) => {
  const [selectedImg, SetselectedImg] = useState(0);
  return (
    <div className={`project-detail ${open ? "open" : ""}`}>
      <div className="project">
        <div
          onClick={() => {
            setSelectedData(null);
            setOpen(0);
          }}
          className="close-icon"
        >
          <i className="uil uil-times-circle"></i>
        </div>

        <div className="all-img-wrapper">
          <div className="wrapper">
            <img
              className="img-selected"
              src={data.fields.image[selectedImg].fields.file.url}
              alt=""
            />
          </div>
          <div className="project-img-grid">
            {data.fields.image.map((i, index) => {
              return (
                <div key={i.sys.id}>
                  <div
                    onClick={() => SetselectedImg(index)}
                    className={`${
                      selectedImg === index ? "selected" : ""
                    } img-container`}
                  >
                    <img src={i.fields.file.url} alt="" />
                    <div className="overlay">
                      <i className="uil uil-capture"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="content">
          <h4 className="title-text">{data.fields.title}</h4>
          <p className="para-text mb-2">{data.fields.category}</p>
          <hr />
          <p className="para-text mb-4">
            {" "}
            {documentToReactComponents(data.fields.text)}
          </p>
          <button
            onClick={() => {
              setSelectedData(null);
              setOpen(0);
            }}
            className="btn--primary"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

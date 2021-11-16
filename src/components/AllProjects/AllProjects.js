import "./AllProjects.css";
import Modal from "../Modal/Modal";
import { portfolioData } from "../Portfolio/portfolioData";
import { useState, useEffect } from "react";

const AllProjects = () => {
  const [open, setOpen] = useState(0);
  useEffect(() => {
    open !== 0
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [open]);
  return (
    <section className="mt-5 container software">
      <h6 className="title-text mb-4">01. Software Development</h6>
      <div className="each-project-wrapper">
        {portfolioData.map((data) => {
          return (
            <div key={data.id} className="each-project">
              <img
                className="project-img"
                src={data.img[0].src}
                alt={data.title}
              />
              <div className="each-project-content">
                <h4 className="secondary-title-text">{data.title}</h4>
                <p className="category-text mb-3">{data.category}</p>
                <p className="overflow-text para-text mb-3">{data.text}</p>
                <button
                  onClick={() => setOpen(data.id)}
                  className="btn--primary"
                >
                  Read More
                </button>
              </div>
              {open === data.id ? (
                <Modal open={open} setOpen={setOpen} data={data} />
              ) : null}
            </div>
          );
        })}
      </div>

      <br />
      <br />
    </section>
  );
};

export default AllProjects;

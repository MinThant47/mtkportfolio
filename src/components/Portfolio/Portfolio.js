import "./Portfolio.css";
import { portfolioData } from "./portfolioData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import { containerLeft, imgContainer } from "../Animation/Animation";
import useScroll from "../Animation/useScroll";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [element, controls] = useScroll();
  const [open, setOpen] = useState(0);
  useEffect(() => {
    open !== 0
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [open]);
  return (
    <section ref={element} className="container section" id="portfolio">
      <motion.div variants={containerLeft} animate={controls}>
        <h4 className="title-text text-center mb-2">Portfolio</h4>
        <p className="para-text text-center">
          The below are my recent works.&nbsp;
          <Link to="/all-projects">
            To all projects <i className="uil uil-arrow-right"></i>
          </Link>
        </p>
      </motion.div>

      <motion.div
        className="portfolio-grid"
        transition={{ when: "beforeChildren", staggerChildren: 0.5 }}
      >
        {portfolioData.map((data) => {
          return (
            <motion.div
              variants={imgContainer}
              animate={controls}
              className="portfolio-container"
              key={data.id}
            >
              <div className="porfolio-content">
                <img
                  src={data.img[0].src}
                  alt={data.title}
                  className="portfolio-img"
                />
                <div className="portfolio-data">
                  <h4 className="secondary-title-text mb-2">{data.title}</h4>
                  <p className="category-text">{data.category}</p>
                  <hr />
                  <p className="overflow-text para-text mb-3">{data.text}</p>
                  <button
                    onClick={() => setOpen(data.id)}
                    className="btn--primary portfolio-btn"
                  >
                    Read More
                  </button>
                </div>
              </div>
              {open === data.id ? (
                <Modal
                  open={open}
                  setOpen={setOpen}
                  data={data}
                  setSelectedData={setOpen}
                />
              ) : null}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Portfolio;

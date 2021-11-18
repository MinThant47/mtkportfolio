import "./Portfolio.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import { containerLeft, imgContainer } from "../Animation/Animation";
import useScroll from "../Animation/useScroll";
import { motion } from "framer-motion";
import { client } from "../../Backend/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SkeletonPortfolio from "../Skeleton/SkeletonPortfolio";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [element, controls] = useScroll();
  const [open, setOpen] = useState(0);
  useEffect(() => {
    open !== 0
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [open]);

  useEffect(() => {
    client
      .getEntries({ content_type: "portfolio" })
      .then((res) => {
        setPortfolioData(res.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

      <motion.div className="portfolio-grid">
        {portfolioData
          ? portfolioData.slice(0, 4).map((data) => {
              return (
                <motion.div
                  variants={imgContainer}
                  animate={controls}
                  className="portfolio-container"
                  key={data.sys.id}
                >
                  <div className="porfolio-content">
                    <img
                      src={data.fields.image[0].fields.file.url}
                      alt={data.fields.title}
                      className="portfolio-img"
                    />
                    <div className="portfolio-data">
                      <h4 className="secondary-title-text">
                        {data.fields.title}
                      </h4>
                      <p className="category-text mb-3">
                        {data.fields.category}
                      </p>

                      <div className="overflow-text para-text mb-3">
                        {documentToReactComponents(data.fields.text)}
                      </div>

                      <button
                        onClick={() => setOpen(data.sys.id)}
                        className="btn--primary portfolio-btn"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                  {open === data.sys.id ? (
                    <Modal
                      open={open}
                      setOpen={setOpen}
                      data={data}
                      setSelectedData={setOpen}
                    />
                  ) : (
                    <></>
                  )}
                </motion.div>
              );
            })
          : [1, 2].map((index) => {
              return <SkeletonPortfolio key={index} />;
            })}
      </motion.div>
    </section>
  );
};

export default Portfolio;

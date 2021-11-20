import "./About.css";
import resume from "../../Assets/MTK cv form 2021.pdf";
import { containerLeft, imgContainer } from "../Animation/Animation";
import useScroll from "../Animation/useScroll";
import { motion } from "framer-motion";

const About = () => {
  const [element, controls] = useScroll();
  return (
    <section className="container section" ref={element} id="about">
      <div className="about">
        <motion.div
          variants={containerLeft}
          animate={controls}
          className="about-content"
        >
          <h4 className="title-text mb-3">About my life</h4>
          <p className="para-text mb-3">
          20-year-old youngster with a passion for electronics, programming, and graphic design.
          </p>
          <p className="para-text mb-3">
        
I have a lot of experience with the frontend development. Currently, I'm working as a freelance web developer and graphic designer.   
          </p>
          <p className="para-text mb-3">
          Despite the fact that my current bachelor's degree is in electronics, I am much more interested in coding and algorithms.
          </p>
          <a href={resume} download className="btn--primary">
            Get my cv <i className="uil uil-caret-right"></i>
          </a>
        </motion.div>

        <motion.div
          variants={imgContainer}
          animate={controls}
          transition={{ delay: 0.4 }}
          className="about-hobby"
        >
          <div className="hobby-grid">
            <div className="hobby">
              <h5 className="secondary-title-text">01.</h5>
              <i className="uil uil-arrow hobby-icons"></i>
              <p className="para-text text-center">
                Software <br />
                Development
              </p>
            </div>
            <div className="hobby">
              <h5 className="secondary-title-text">02.</h5>
              <i className="uil uil-circuit hobby-icons"></i>
              <p className="para-text text-center">Electronics</p>
            </div>
            <div className="hobby hobby-3">
              <h5 className="secondary-title-text">03.</h5>
              <i className="uil uil-pen hobby-icons"></i>
              <p className="para-text text-center">
                Graphic <br />
                Design
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

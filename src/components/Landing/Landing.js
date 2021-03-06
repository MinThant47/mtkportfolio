import "./Landing.css";
import landingSvg from "../../Assets/molo landing.svg";
import { containerLeft, imgContainer } from "../Animation/Animation";
import useScroll from "../Animation/useScroll";
import { motion } from "framer-motion";

const Landing = () => {
  const [element, controls] = useScroll();
  return (
    <section ref={element} className="container" id="landing">
      <div className="landing section">
        <motion.img
          variants={imgContainer}
          animate={controls}
          src={landingSvg}
          alt=""
          className="img-fluid"
        />
        <motion.div
          className="content"
          variants={containerLeft}
          animate={controls}
        >
          <h4 className="title-text mb-3">
            <span id="mtk">Min Thant Kyaw </span>
          </h4>
          <p className="para-text mb-3">
            An Electronic engineering student at the undergraduate level who is
            able to complete tasks on schedule with excellent flexibility.
          </p>
          <div className="btn-links">
            <a href="/#contact" className="btn--primary">
              Contact
            </a>
            <a
              href="https://github.com/MinThant47?tab=repositories"
              className="btn-icons"
            >
              <i className="uil uil-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/min-thant-kyaw-788b17201"
              className="btn-icons"
            >
              <i className="uil uil-linkedin"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;

import "./Footer.css";
import { Link } from "react-router-dom";
import { upContainer } from "../Animation/Animation";
import useScroll from "../Animation/useScroll";
import { motion } from "framer-motion";

const Footer = () => {
  const [element, controls] = useScroll();
  return (
    <footer ref={element} className="container mb-4">
      <div className="empty"></div>
      <motion.div
        variants={upContainer}
        animate={controls}
        className="footer-container"
      >
        <div className="logo">
          <Link to="/">
            <h5 className="title-text">MTK</h5>
          </Link>
        </div>
        <div className="footer-links">
          <ul className="footer-menu">
            <li className="footer-item">
              <a href="/#services" className="footer-link">
                Services
              </a>
            </li>
            <li className="footer-item">
              <a href="/#portfolio" className="footer-link">
                Portfolio
              </a>
            </li>
            <li className="footer-item">
              <a href="/#contact" className="footer-link">
                Contact
              </a>
            </li>
            <li className="footer-item">
              <Link to="/all-projects" className="footer-link">
                All Projects
              </Link>
            </li>
          </ul>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/minthantkyaw47"
              className="footer-icon"
            >
              <i className="uil uil-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/min_thant4747/"
              className="footer-icon"
            >
              <i className="uil uil-instagram"></i>
            </a>
            <a
              href="https://twitter.com/MinThant47?t=nuSFaWFNdPeU9xa1ul_QRA&s=09"
              className="footer-icon"
            >
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>
        </div>
      </motion.div>
      <motion.p
        variants={upContainer}
        animate={controls}
        className="mt-3 para-text text-center"
      >
        &copy;copyright2021
      </motion.p>
      <div className="empty"></div>
    </footer>
  );
};

export default Footer;

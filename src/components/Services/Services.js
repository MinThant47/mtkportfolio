import "./Services.css";
import { containerLeft, imgContainer } from "../Animation/Animation";
import useScroll from "../Animation/useScroll";
import { motion } from "framer-motion";

const Services = () => {
  const [element, controls] = useScroll();
  return (
    <section ref={element} className="container section" id="services">
      <motion.div variants={containerLeft} animate={controls}>
        <h4 className="title-text text-center mb-2">Services</h4>
        <p className="para-text text-center">The services below are provided</p>
      </motion.div>
      <div className="services mt-4">
        <motion.div
          variants={imgContainer}
          animate={controls}
          transition={{ delay: 0.2 }}
          className="service-card"
        >
          <i className="uil uil-brackets-curly"></i>
          <h6 className="para-text text-center mt-2">Frontend Developer</h6>
        </motion.div>
        <motion.div
          variants={imgContainer}
          animate={controls}
          transition={{ delay: 0.3 }}
          className="service-card"
        >
          <i className="uil uil-server-connection"></i>
          <h6 className="para-text text-center mt-2">Backend Developer</h6>
        </motion.div>
        <motion.div
          variants={imgContainer}
          animate={controls}
          transition={{ delay: 0.4 }}
          className="service-card"
        >
          <i className="uil uil-circuit"></i>
          <h6 className="para-text text-center mt-2">Electronic Projects</h6>
        </motion.div>
        <motion.div
          variants={imgContainer}
          animate={controls}
          transition={{ delay: 0.4 }}
          className="service-card"
        >
          <i className="uil uil-swatchbook"></i>
          <h6 className="para-text text-center mt-2">Graphic Designer</h6>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

import "./NotFoundPage.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import {
  containerLeft,
  containerRight,
  imgContainer,
} from "../Animation/Animation";
import useScroll from "../Animation/useScroll";

const NotFoundPage = () => {
  const [element, controls] = useScroll();
  const history = useHistory();
  return (
    <>
      <section ref={element} className="section container not-found-grid">
        <div className="not-found">
          <motion.h6
            variants={imgContainer}
            animate={controls}
            className="mt-5 not-found-text"
          >
            404
          </motion.h6>
          <motion.p
            variants={containerLeft}
            animate={controls}
            className="text-center oops-text"
          >
            {" "}
            Oops...You get lost!{" "}
          </motion.p>
          <motion.p
            variants={containerRight}
            animate={controls}
            className="text-center para-text"
          >
            Sorry, the page you are trying to access is unavailable.
          </motion.p>
          <motion.div
            variants={containerLeft}
            animate={controls}
            className="not-found-btn-group"
          >
            <Link to="/">
              <button className="btn--primary">To Home</button>
            </Link>
            <button onClick={() => history.goBack()} className="btn-white">
              Back
            </button>
          </motion.div>
        </div>
      </section>
      <br />
    </>
  );
};

export default NotFoundPage;

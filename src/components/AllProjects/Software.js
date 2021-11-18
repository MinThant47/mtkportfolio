import { portfolioData } from "../Portfolio/portfolioData";
import EachProject from "./EachProject";
import { motion } from "framer-motion";
import { containerLeft, downContainer } from "../Animation/Animation";
import useScroll from "../Animation/useScroll";

const Software = ({ setSelectedData, setOpen }) => {
  const [element, controls] = useScroll();
  return (
    <section ref={element} className="mt-5 container software">
      <motion.h6
        variants={containerLeft}
        animate={controls}
        className="title-text mb-4"
      >
        01. Software Development
      </motion.h6>
      <motion.div variants={downContainer} animate={controls}>
        <EachProject
          data={portfolioData}
          setSelectedData={setSelectedData}
          setOpen={setOpen}
        />
      </motion.div>
    </section>
  );
};

export default Software;

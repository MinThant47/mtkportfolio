import { electronicData } from "../Portfolio/electronicData";
import EachProject from "./EachProject";
import { motion } from "framer-motion";
import { containerLeft, opacityContainer } from "../Animation/Animation";
import useScroll from "../Animation/useScroll";

const Electronics = ({ setSelectedData, setOpen }) => {
  const [element, controls] = useScroll();
  return (
    <section ref={element} className="mt-5 container electronics">
      <motion.h6
        variants={containerLeft}
        animate={controls}
        className="title-text mb-4"
      >
        02. Electronic Projects
      </motion.h6>
      <motion.div variants={opacityContainer} animate={controls}>
        <EachProject
          data={electronicData}
          setSelectedData={setSelectedData}
          setOpen={setOpen}
        />
      </motion.div>
    </section>
  );
};

export default Electronics;

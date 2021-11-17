import { graphicData } from "../Portfolio/graphicData";
import EachProject from "./EachProject";
import { motion } from "framer-motion";
import { containerLeft, containerRight } from "../Animation/Animation";
import useScroll from "../Animation/useScroll";

const Graphic = ({ setSelectedData, setOpen }) => {
  const [element, controls] = useScroll();
  return (
    <section ref={element} className="mt-5 container graphic">
      <motion.h6
        variants={containerLeft}
        animate={controls}
        className="title-text mb-4"
      >
        03. Graphic Designs
      </motion.h6>
      <motion.div variants={containerRight} animate={controls}>
        <EachProject
          data={graphicData}
          setSelectedData={setSelectedData}
          setOpen={setOpen}
        />
      </motion.div>
    </section>
  );
};

export default Graphic;

import { useState, useEffect } from "react";
import EachProject from "./EachProject";
import { motion } from "framer-motion";
import { containerLeft, downContainer } from "../Animation/Animation";
import useScroll from "../Animation/useScroll";
import { client } from "../../Backend/client";
import Skeleton from "../Skeleton/Skeleton";

const Graphic = ({ setSelectedData, setOpen }) => {
  const [graphicData, setGraphicData] = useState(null);
  useEffect(() => {
    client
      .getEntries({
        content_type: "portfolio",
        "fields.category": "Graphic Design",
      })
      .then((res) => {
        setGraphicData(res.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [element, controls] = useScroll();
  return (
    <section ref={element} className="mt-5 container graphic">
      <motion.h6
        variants={containerLeft}
        animate={controls}
        className="secondary-title-text mb-4"
      >
        03. Graphic Designs
      </motion.h6>
      {graphicData ? (
        <motion.div variants={downContainer} animate={controls}>
          <EachProject
            data={graphicData}
            setSelectedData={setSelectedData}
            setOpen={setOpen}
          />
        </motion.div>
      ) : (
        <div className="skeleton-wrapper">
          {[1, 2, 3].map((index) => {
            return <Skeleton key={index} />;
          })}
        </div>
      )}
    </section>
  );
};

export default Graphic;

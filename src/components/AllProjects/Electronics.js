import { useState, useEffect } from "react";
import EachProject from "./EachProject";
import { motion } from "framer-motion";
import { containerLeft, downContainer } from "../Animation/Animation";
import useScroll from "../Animation/useScroll";
import { client } from "../../Backend/client";
import Skeleton from "../Skeleton/Skeleton";

const Electronics = ({ setSelectedData, setOpen }) => {
  const [electronicsData, setElectronicsData] = useState(null);
  useEffect(() => {
    client
      .getEntries({
        content_type: "portfolio",
        "fields.category": "Electronics",
      })
      .then((res) => {
        setElectronicsData(res.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [element, controls] = useScroll();
  return (
    <section ref={element} className="mt-5 container electronics">
      <motion.h6
        variants={containerLeft}
        animate={controls}
        className="secondary-title-text mb-4"
      >
        02. Electronic Projects
      </motion.h6>
      {electronicsData ? (
        <motion.div variants={downContainer} animate={controls}>
          <EachProject
            data={electronicsData}
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

export default Electronics;

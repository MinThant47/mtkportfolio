import { useState, useEffect } from "react";
import EachProject from "./EachProject";
import { motion } from "framer-motion";
import { containerLeft, downContainer } from "../Animation/Animation";
import useScroll from "../Animation/useScroll";
import { client } from "../../Backend/client";
import Skeleton from "../Skeleton/Skeleton";

const Software = ({ setSelectedData, setOpen }) => {
  const [softwareData, setSoftwareData] = useState(null);
  useEffect(() => {
    client
      .getEntries({
        content_type: "portfolio",
        "fields.category": "Software development",
      })
      .then((res) => {
        setSoftwareData(res.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [element, controls] = useScroll();
  return (
    <section ref={element} className="mt-5 container software">
      <motion.h6
        variants={containerLeft}
        animate={controls}
        className="secondary-title-text mb-4"
      >
        01. Software Development
      </motion.h6>
      {softwareData ? (
        <motion.div variants={downContainer} animate={controls}>
          <EachProject
            data={softwareData}
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

export default Software;

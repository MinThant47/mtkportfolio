import "./AllProjects.css";
import Modal from "../Modal/Modal";
import Software from "./Software";
import Electronics from "./Electronics";
import Graphic from "./Graphic";
import { useState, useEffect } from "react";

const AllProjects = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [open, setOpen] = useState(0);
  useEffect(() => {
    open !== 0
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [open]);

  console.log(selectedData);

  // Slider

  return (
    <>
      {selectedData !== null ? (
        <Modal
          open={open}
          setOpen={setOpen}
          data={selectedData}
          setSelectedData={setSelectedData}
        />
      ) : null}
      <br />
      <br />
      <Software setSelectedData={setSelectedData} setOpen={setOpen} />
      <Electronics setSelectedData={setSelectedData} setOpen={setOpen} />
      <Graphic setSelectedData={setSelectedData} setOpen={setOpen} />
      <br />
      <br />
    </>
  );
};

export default AllProjects;

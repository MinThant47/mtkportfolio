import { electronicData } from "../Portfolio/electronicData";
import EachProject from "./EachProject";

const Electronics = ({ setSelectedData, setOpen }) => {
  return (
    <section className="mt-5 container electronics">
      <h6 className="title-text mb-4">02. Electronic Projects</h6>
      <div>
        <EachProject
          data={electronicData}
          setSelectedData={setSelectedData}
          setOpen={setOpen}
        />
      </div>
    </section>
  );
};

export default Electronics;

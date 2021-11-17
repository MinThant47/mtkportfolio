import { graphicData } from "../Portfolio/graphicData";
import EachProject from "./EachProject";

const Graphic = ({ setSelectedData, setOpen }) => {
  return (
    <section className="mt-5 container graphic">
      <h6 className="title-text mb-4">03. Graphic Designs</h6>
      <div>
        <EachProject
          data={graphicData}
          setSelectedData={setSelectedData}
          setOpen={setOpen}
        />
      </div>
    </section>
  );
};

export default Graphic;

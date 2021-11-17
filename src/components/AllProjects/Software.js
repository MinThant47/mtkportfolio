import { portfolioData } from "../Portfolio/portfolioData";
import EachProject from "./EachProject";

const Software = ({ setSelectedData, setOpen }) => {
  return (
    <section className="mt-5 container software">
      <h6 className="title-text mb-4">01. Software Development</h6>
      <div>
        <EachProject data={portfolioData} setSelectedData={setSelectedData} setOpen={setOpen}/>
      </div>
    </section>
  );
};

export default Software;

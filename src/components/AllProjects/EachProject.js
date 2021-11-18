import Slider from "react-slick";
import { sliderSettings } from "./SliderSettings";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const EachProject = ({ data, setOpen, setSelectedData }) => {
  return (
    <Slider {...sliderSettings}>
      {data ? (
        data.map((data) => {
          return (
            <div key={data.sys.id}>
              <div className="each-project">
                <img
                  className="project-img"
                  src={data.fields.image[0].fields.file.url}
                  alt={data.fields.title}
                />
                <div className="each-project-content">
                  <h4 className="secondary-title-text">{data.fields.title}</h4>
                  <p className="category-text mb-3">{data.fields.category}</p>
                  <div className="overflow-text para-text mb-3">
                    {documentToReactComponents(data.fields.text)}
                  </div>
                  <button
                    onClick={() => {
                      setOpen(data.sys.id);
                      setSelectedData(data);
                    }}
                    className="btn--primary"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </Slider>
  );
};

export default EachProject;

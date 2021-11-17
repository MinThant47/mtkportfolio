import Slider from "react-slick";
import { sliderSettings } from "./SliderSettings";

const EachProject = ({ data, setOpen, setSelectedData }) => {
  return (
    <Slider {...sliderSettings}>
      {data.map((data) => {
        return (
          <>
            <div key={data.id} className="each-project">
              <img
                className="project-img"
                src={data.img[0].src}
                alt={data.title}
              />
              <div className="each-project-content">
                <h4 className="secondary-title-text">{data.title}</h4>
                <p className="category-text mb-3">{data.category}</p>
                <p className="overflow-text para-text mb-3">{data.text}</p>
                <button
                  onClick={() => {
                    setOpen(data.id);
                    setSelectedData(data);
                  }}
                  className="btn--primary"
                >
                  Read More
                </button>
              </div>
            </div>
          </>
        );
      })}
    </Slider>
  );
};

export default EachProject;

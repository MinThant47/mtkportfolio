import "./AllProjects.css";
import Modal from "../Modal/Modal";
import { portfolioData } from "../Portfolio/portfolioData";
import { graphicData } from "../Portfolio/graphicData";
import { electronicData } from "../Portfolio/electronicData";
import { useState, useEffect } from "react";
import Slider from "react-slick";

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
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      <section className="mt-5 container software">
        <h6 className="title-text mb-4">01. Software Development</h6>
        <div>
          <Slider {...settings}>
            {portfolioData.map((data) => {
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
                      <p className="overflow-text para-text mb-3">
                        {data.text}
                      </p>
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
        </div>
      </section>
      <section className="mt-5 container software">
        <h6 className="title-text mb-4">02. Electronic Projects</h6>
        <div>
          <Slider {...settings}>
            {electronicData.map((data) => {
              return (
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
              );
            })}
          </Slider>
        </div>
      </section>
      <section className="mt-5 container software">
        <h6 className="title-text mb-4">03. Graphic Desings</h6>
        <div>
          <Slider {...settings}>
            {graphicData.map((data) => {
              return (
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
              );
            })}
          </Slider>
        </div>
      </section>
      <br />
      <br />
    </>
  );
};

export default AllProjects;

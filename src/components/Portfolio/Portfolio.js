import "./Portfolio.css";
import { porfolioData } from "./portfolioData";

const Portfolio = () => {
  return (
    <section className="container section" id="portfolio">
      <h4 className="title-text text-center mb-2">Portfolio</h4>
      <p className="para-text text-center">
        The below are my recent works.
        <a href="/all-projects">
          To all projects <i className="uil uil-arrow-right"></i>
        </a>
      </p>

      <div className="portfolio-grid">
        {porfolioData.map((data) => {
          return (
            <div className="portfolio-container" key={data.id}>
              <div className="porfolio-content">
                <img
                  src={data.img}
                  alt={data.title}
                  className="portfolio-img"
                />
                <div className="portfolio-data">
                  <h4 className="secondary-title-text mb-2">{data.title}</h4>
                  <p className="category-text">{data.category}</p>
                  <hr />
                  <p className="para-text mb-3">{data.text}</p>
                  <a href="/" className="btn--primary portfolio-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

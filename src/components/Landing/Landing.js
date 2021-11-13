import "./Landing.css";
import landingSvg from "../../Assets/molo landing.svg";

const Landing = () => {
  return (
    <section className="container" id="landing">
      <div className="landing section">
        <img src={landingSvg} alt="" className="img-fluid" />
        <div className="content">
          <h4 className="title-text big mb-3">Who am I?</h4>
          <p className="para-text mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
            voluptate repudiandae, sunt fugit nisi labore quis praesentium,
            optio tenetur, eum debitis error iusto ad fuga neque ea quasi quo
          </p>
          <div className="btn-links">
            <a href="/#about" className="btn--primary">
              Explore
            </a>
            <a href="/" className="btn-icons">
              <i className="uil uil-github"></i>
            </a>
            <a href="/" className="btn-icons">
              <i className="uil uil-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

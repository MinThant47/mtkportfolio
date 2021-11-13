import "./Landing.css";
import landingSvg from "../../Assets/molo landing.svg";

const Landing = () => {
  return (
    <section class="container" id="landing">
      <div class="landing section">
        <img src={landingSvg} alt="" class="img-fluid" />
        <div class="content">
          <h4 class="title-text big mb-3">Who am I?</h4>
          <p class="para-text mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
            voluptate repudiandae, sunt fugit nisi labore quis praesentium,
            optio tenetur, eum debitis error iusto ad fuga neque ea quasi quo
          </p>
          <div class="btn-links">
            <a href="/" class="btn--primary">
              Explore
            </a>
            <a href="/" class="btn-icons">
              <i class="uil uil-github"></i>
            </a>
            <a href="/" class="btn-icons">
              <i class="uil uil-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

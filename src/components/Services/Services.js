import "./Services.css";

const Services = () => {
  return (
    <section className="container section" id="services">
      <h4 className="title-text text-center mb-2">Services</h4>
      <p className="para-text text-center">The services below are provided</p>
      <div className="services mt-4">
        <div className="service-card">
          <i className="uil uil-brackets-curly"></i>
          <h6 className="para-text text-center mt-2">Frontend Developer</h6>
        </div>
        <div className="service-card">
          <i className="uil uil-server-connection"></i>
          <h6 className="para-text text-center mt-2">Backend Developer</h6>
        </div>
        <div className="service-card">
          <i className="uil uil-circuit"></i>
          <h6 className="para-text text-center mt-2">Electronic Projects</h6>
        </div>
        <div className="service-card">
          <i className="uil uil-swatchbook"></i>
          <h6 className="para-text text-center mt-2">Graphic Designer</h6>
        </div>
      </div>
    </section>
  );
};

export default Services;

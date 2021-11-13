import "./Services.css";

const Services = () => {
  return (
    <section class="container section" id="services">
      <h4 class="title-text text-center mb-2">Services</h4>
      <p class="para-text text-center">The services below are provided</p>
      <div class="services mt-4">
        <div class="service-card">
          <i class="uil uil-brackets-curly"></i>
          <h6 class="para-text text-center mt-2">Frontend Developer</h6>
        </div>
        <div class="service-card">
          <i class="uil uil-server-connection"></i>
          <h6 class="para-text text-center mt-2">Backend Developer</h6>
        </div>
        <div class="service-card">
          <i class="uil uil-circuit"></i>
          <h6 class="para-text text-center mt-2">Electronic Projects</h6>
        </div>
        <div class="service-card">
          <i class="uil uil-swatchbook"></i>
          <h6 class="para-text text-center mt-2">Graphic Designer</h6>
        </div>
      </div>
    </section>
  );
};

export default Services;

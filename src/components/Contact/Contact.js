import "./Contact.css";
import contactSvg from "../../Assets/contact-portflio.svg";

export default function Contact() {
  return (
    <section className="container section" id="contact">
      <h4 className="title-text text-center mb-2">Contact</h4>
      <p className="para-text text-center">Get in touch with me</p>

      <div className="contact-container">
        <div className="contact-data">
          <div className="contact-content">
            <i className="uil uil-phone-alt contact-icon"></i>
            <div className="contact-info">
              <h4 className="text-uppercase secondary-title-text">Call me</h4>
              <p className="para-text contact-info-text">09 455 244 456</p>
            </div>
          </div>
          <div className="contact-content">
            <i className="uil uil-envelope-alt contact-icon"></i>
            <div className="contact-info">
              <h4 className="text-uppercase secondary-title-text">Email</h4>
              <p className="para-text contact-info-text">
                minthantkyaw47@gmail.com
              </p>
            </div>
          </div>
          <div className="contact-content">
            <i className="uil uil-map-marker-alt contact-icon"></i>
            <div className="contact-info">
              <h4 className="text-uppercase secondary-title-text">Location</h4>
              <p className="para-text contact-info-text">Yangon, Myanmar</p>
            </div>
          </div>
        </div>

        <img src={contactSvg} alt="contact SVG" className="contact-svg" />
      </div>
    </section>
  );
}

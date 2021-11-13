import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container mb-4">
      <div className="empty"></div>
      <div className="footer-container">
        <div className="logo">
          <h5 className="title-text">Marky</h5>
        </div>
        <div className="footer-links">
          <ul className="footer-menu">
            <li className="footer-item">
              <a href="/#services" className="footer-link">
                Services
              </a>
            </li>
            <li className="footer-item">
              <a href="#/portfolio" className="footer-link">
                Portfolio
              </a>
            </li>
            <li className="footer-item">
              <a href="#/contact" className="footer-link">
                Contact
              </a>
            </li>
            <li className="footer-item">
              <a href="/all-projects" className="footer-link">
                All Projects
              </a>
            </li>
          </ul>
          <div className="footer-social">
            <a href="/" className="footer-icon">
              <i className="uil uil-facebook-f"></i>
            </a>
            <a href="/" className="footer-icon">
              <i className="uil uil-instagram"></i>
            </a>
            <a href="/" className="footer-icon">
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="mt-3 para-text text-center">&copy;copyright2021</p>
      <div className="empty"></div>
    </footer>
  );
};

export default Footer;

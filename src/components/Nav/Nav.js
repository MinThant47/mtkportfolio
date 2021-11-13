import "./Nav.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isDark, setIsDark] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    isDark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDark]);

  return (
    <header>
      <nav className="navigation container pt-4">
        <div className="logo">
          <h5>Marky</h5>
        </div>

        <ul className={`nav-list ${toggle ? "active" : ""}`}>
          <li className="nav-items">
            <Link to="/" className="nav-links">
              <i className="uil uil-estate nav-icons"></i>Home
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/#about" className="nav-links">
              <i className="uil uil-user nav-icons"></i>About
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/#skills" className="nav-links">
              <i className="uil uil-setting nav-icons"></i>Skills
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/#services" className="nav-links">
              <i className="uil uil-briefcase-alt nav-icons"></i>Services
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/#porfolio" className="nav-links">
              <i className="uil uil-scenery nav-icons"></i>Portfolio
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/#contact" className="nav-links">
              <i className="uil uil-message nav-icons"></i> Contact
            </Link>
          </li>
        </ul>

        <div className="nav-btn">
          <i
            id="theme"
            onClick={() => {
              setIsDark((prev) => !prev);
            }}
            className={`${isDark ? "uil uil-sun " : "uil uil-moon "} theme`}
          ></i>
          <i
            id="nav-toggle"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
            className={`uil ${
              toggle ? "uil-times-circle" : "uil-apps "
            } nav-toggle`}
          ></i>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

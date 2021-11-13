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
      <nav class="navigation container pt-4">
        <div class="logo">
          <h5>Marky</h5>
        </div>

        <ul class={`nav-list ${toggle ? "active" : ""}`}>
          <li class="nav-items">
            <Link to="/" class="nav-links">
              <i class="uil uil-estate nav-icons"></i>Home
            </Link>
          </li>
          <li class="nav-items">
            <Link to="/#about" class="nav-links">
              <i class="uil uil-user nav-icons"></i>About
            </Link>
          </li>
          <li class="nav-items">
            <Link to="/#skills" class="nav-links">
              <i class="uil uil-setting nav-icons"></i>Skills
            </Link>
          </li>
          <li class="nav-items">
            <Link to="/#services" class="nav-links">
              <i class="uil uil-briefcase-alt nav-icons"></i>Services
            </Link>
          </li>
          <li class="nav-items">
            <Link to="/#porfolio" class="nav-links">
              <i class="uil uil-scenery nav-icons"></i>Portfolio
            </Link>
          </li>
          <li class="nav-items">
            <Link to="/#contact" class="nav-links">
              <i class="uil uil-message nav-icons"></i> Contact
            </Link>
          </li>
        </ul>

        <div class="nav-btn">
          <i
            id="theme"
            onClick={() => {
              setIsDark((prev) => !prev);
            }}
            class={`${isDark ? "uil uil-sun " : "uil uil-moon "} theme`}
          ></i>
          <i
            id="nav-toggle"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
            class={`uil ${
              toggle ? "uil-times-circle" : "uil-apps "
            } nav-toggle`}
          ></i>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

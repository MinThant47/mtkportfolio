import "./Nav.css";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { navContainer } from "../Animation/Animation";
import useScroll from "../Animation/useScroll";
import { motion } from "framer-motion";

const Nav = () => {
  const [element, controls] = useScroll();
  const [isDark, setIsDark] = useState(null);
  const [toggle, setToggle] = useState(false);

  // hide nav when scroll down & show when scroll up
  const [shadow, setShadow] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.pageYOffset === 0 ? setShadow(true) : setShadow(false);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  useEffect(() => {
    var data = localStorage.getItem("isDark");
    if (data === null) {
      setIsDark(true);
      console.log("was null setting to false");
    } else {
      data = JSON.parse(data);
      setIsDark(data);
    }
  }, []);

  useEffect(() => {
    isDark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDark]);

  return (
    <header
      ref={element}
      style={{ top: visible ? "0" : "-100%", opactiy: visible ? "1" : "0" }}
      className={shadow ? "rm-shadow" : ""}
    >
      <motion.nav
        variants={navContainer}
        animate={controls}
        className="navigation container pt-4"
      >
        <div className="logo">
          <Link to="/">
            <h5 className="title-text">MTK</h5>
          </Link>
        </div>

        <ul className={`nav-list ${toggle ? "active" : ""}`}>
          <li className="nav-items">
            <a
              onClick={() => setToggle((prev) => !prev)}
              href="/"
              className="nav-links"
            >
              <i className="uil uil-estate nav-icons"></i>Home
            </a>
          </li>
          <li className="nav-items">
            <a
              onClick={() => setToggle((prev) => !prev)}
              href="/#about"
              className="nav-links"
            >
              <i className="uil uil-user nav-icons"></i>About
            </a>
          </li>
          <li className="nav-items">
            <a
              onClick={() => setToggle((prev) => !prev)}
              href="/#skills"
              className="nav-links"
            >
              <i className="uil uil-setting nav-icons"></i>Skills
            </a>
          </li>
          <li className="nav-items">
            <a
              onClick={() => setToggle((prev) => !prev)}
              href="/#services"
              className="nav-links"
            >
              <i className="uil uil-briefcase-alt nav-icons"></i>Services
            </a>
          </li>
          <li className="nav-items">
            <a
              onClick={() => setToggle((prev) => !prev)}
              href="/#portfolio"
              className="nav-links"
            >
              <i className="uil uil-scenery nav-icons"></i>Portfolio
            </a>
          </li>
          <li className="nav-items">
            <a
              onClick={() => setToggle((prev) => !prev)}
              href="/#contact"
              className="nav-links"
            >
              <i className="uil uil-message nav-icons"></i> Contact
            </a>
          </li>
        </ul>

        <div className="nav-btn">
          <i
            id="theme"
            onClick={() => {
              setIsDark((prev) => !prev);
              localStorage.setItem("isDark", !isDark);
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
      </motion.nav>
    </header>
  );
};

export default Nav;

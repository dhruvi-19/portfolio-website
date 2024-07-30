import "./Navbar.css";
import CommonButton from "../Other Components/CommonButton";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import menu from "../../assets/menu.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const openMenu = () => {
    setClosing(false);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
    }, 500);
  };

  return (
    <Router>
      <div className="navContainer">
        <a
          href="#home"
          className="logo-link"
          style={{ scrollBehavior: "smooth" }}
        >
          <h1 className="logo-name">
            <span className="logo--of-d">DB</span>
          </h1>
        </a>

        <div className="link-container">
          <a href="#portfolio" style={{ scrollBehavior: "smooth" }}>
            Portfolio
          </a>
          <a href="#about" style={{ scrollBehavior: "smooth" }}>
            About
          </a>
          <a href="#resume" style={{ scrollBehavior: "smooth" }}>
            Resume
          </a>
          <a href="#blog" style={{ scrollBehavior: "smooth" }}>
            Blog
          </a>
        </div>

        <div className="nav-button">
          <a href="#contact" style={{ scrollBehavior: "smooth" }}>
            <CommonButton>Let's Talk</CommonButton>
          </a>
        </div>

        <button className="header-menu" onClick={openMenu}>
          <img src={menu} alt="menu" />
        </button>

        {menuOpen && (
          <div
            className={`menu-container ${menuOpen ? "open" : ""} ${
              closing ? "closing" : ""
            }`}
          >
            <div className="menu-close-button" onClick={closeMenu}>
              ×
            </div>
            <div className="menu-link-container">
              <a
                href="#home"
                style={{ scrollBehavior: "smooth" }}
                onClick={closeMenu}
              >
                Home
              </a>
              <a
                href="#portfolio"
                style={{ scrollBehavior: "smooth" }}
                onClick={closeMenu}
              >
                Portfolio
              </a>
              <a
                href="#about"
                style={{ scrollBehavior: "smooth" }}
                onClick={closeMenu}
              >
                About
              </a>
              <a
                href="#resume"
                style={{ scrollBehavior: "smooth" }}
                onClick={closeMenu}
              >
                Resume
              </a>
              <a
                href="#blog"
                style={{ scrollBehavior: "smooth" }}
                onClick={closeMenu}
              >
                Blog
              </a>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default Navbar;

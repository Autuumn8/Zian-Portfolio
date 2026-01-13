import React, { useState, useEffect } from "react";
import logo from "../assets/LOGO.png"; // Import your saved logo

function Navbar({ onScrollToSection, activeSection = "home", theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleNavClick = (section) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileOpen(false);
    onScrollToSection(section);
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    setMobileOpen((open) => !open);
  };

  useEffect(() => {
    if (!mobileOpen) return;

    const handleClickOutside = (e) => {
      const navLinksEl = document.querySelector(".nav-links");
      const navToggleEl = document.querySelector(".nav-toggle");
      if (
        navLinksEl &&
        navToggleEl &&
        !navLinksEl.contains(e.target) &&
        !navToggleEl.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo" onClick={() => onScrollToSection("home")}>
          <img 
            src={logo} 
            alt="Zian Logo" 
            className="logo-image"
          />
        </div>

        {/* Navigation Links */}
        <div className={`nav-links${mobileOpen ? " open" : ""}`}>
          <a href="#home" className={`nav-link${activeSection === "home" ? " active" : ""}`} onClick={handleNavClick("home")}>
            <i className="fas fa-home"></i> <span>Home</span>
          </a>
          <a href="#about" className={`nav-link${activeSection === "about" ? " active" : ""}`} onClick={handleNavClick("about")}>
            <i className="fas fa-user"></i> <span>About</span>
          </a>
          <a href="#education" className={`nav-link${activeSection === "education" ? " active" : ""}`} onClick={handleNavClick("education")}>
            <i className="fas fa-graduation-cap"></i> <span>Education</span>
          </a>
          <a href="#works" className={`nav-link${activeSection === "works" ? " active" : ""}`} onClick={handleNavClick("works")}>
            <i className="fas fa-briefcase"></i> <span>Works</span>
          </a>
          <a href="#contact" className={`nav-link${activeSection === "contact" ? " active" : ""}`} onClick={handleNavClick("contact")}>
            <i className="fas fa-envelope"></i> <span>Contact</span>
          </a>

          {isMobile && (
            <button className="theme-toggle-btn mobile" onClick={() => { toggleTheme(); setMobileOpen(false); }}>
              {theme === "dark" ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>
          )}
        </div>

        {/* Theme Toggle (Desktop) */}
        {!isMobile && (
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === "dark" ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
        )}

        {/* Mobile Hamburger */}
        <div className={`nav-toggle${mobileOpen ? " active" : ""}`} onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

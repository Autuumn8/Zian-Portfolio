import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import SwipeIndicator from "./components/SwipeIndicator";
import Navbar from "./components/Navbar";
import ProfileSidebar from "./components/ProfileSidebar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import ProjectModal from "./components/ProjectModal";
import "./style.css";

export default function App({ theme, toggleTheme }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProjectId, setModalProjectId] = useState(null);
  const [activeSection, setActiveSection] = useState("home");

  /* ---------------- NAVIGATION ---------------- */

  const switchToSection = (sectionId) => {
    // Always close sidebar first (prevents layout jump)
    setSidebarOpen(false);

    // Let layout stabilize before scrolling
    setTimeout(() => {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("home");
        return;
      }

      const el = document.getElementById(sectionId);
      if (!el) return;

      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }, 60);
  };

  /* ---------------- GLOBAL EVENTS ---------------- */

  useEffect(() => {
    window.scrollToSection = switchToSection;

    window.viewProject = (projectId) => {
      setModalProjectId(projectId);
      setModalOpen(true);
    };

    const onKey = (e) => {
      if (e.key === "Escape") {
        setSidebarOpen(false);
        setModalOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ---------------- SCROLL SPY (DISABLED WHEN SIDEBAR OPEN) ---------------- */

  useEffect(() => {
    if (sidebarOpen) return; // 🔴 CRITICAL FIX

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sidebarOpen]);

  /* ---------------- MOBILE SAFETY ---------------- */

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  }, [activeSection]);

  /* ---------------- RENDER ---------------- */

  return (
    <>
      <Loader />
      <CustomCursor />

      {!sidebarOpen && (
        <SwipeIndicator onOpenSidebar={() => setSidebarOpen(true)} />
      )}

      <Navbar
        onToggleSidebar={() => setSidebarOpen((s) => !s)}
        onScrollToSection={switchToSection}
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <ProfileSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="main-content">
        <section id="home" className="section">
          <Home />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="education" className="section">
          <Education />
        </section>

        <section id="works" className="section">
          <Works />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>

        <section id="gallery" className="section">
          <Gallery />
        </section>
      </main>

      <ProjectModal
        open={modalOpen}
        projectId={modalProjectId}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

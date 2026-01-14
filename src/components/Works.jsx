import React, { useEffect } from "react";

/* ================= PROJECT THUMBNAILS ================= */
import loanTrackerImg from "../assets/Loan Tracker - PORTFOLIO/Welcome Screen.png";
import dormHonorioImg from "../assets/DormHonorio - PORTFOLIO/Welcome Screen.png";
import mediZoneImg from "../assets/MediZone - PORTFOLIO/Welcome Screen.png";
import furEverImg from "../assets/FurEver Care - PORTFOLIO/Home.png";
import moodHomeImg from "../assets/Mood Menu - PORTFOLIO/Home.png";
import agricartImg from "../assets/Farm Produce - PORTFOLIO/Home.png";
import avGuidesImg from "../assets/Travel Guide - PORTFOLIO/Home.png";

export default function Works({ id }) {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("animate-in");
      });
    }, observerOptions);

    setTimeout(() => {
      document
        .querySelectorAll(".project-card")
        .forEach((el) => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  // 🔥 GLOBAL MODAL OPENER (IMAGES ONLY)
  const openModal = (projectId) => {
    if (window.viewProject) {
      window.viewProject(projectId);
    }
  };

  // 🔔 TOAST + EXTERNAL LINK HANDLER
  const openExternal = (url) => {
    if (window.toast?.info) {
      window.toast.info("You are being redirected to an external site", {
        duration: 2500,
      });
      setTimeout(() => {
        window.open(url, "_blank");
      }, 900);
    } else {
      if (window.confirm("You are about to open an external site. Continue?")) {
        window.open(url, "_blank");
      }
    }
  };

  const handleDownloadDorm = () => {
    openExternal(
      "https://expo.dev/accounts/dormhonorio/projects/DormHonorio/builds/c1ed1458-80b9-4c51-859a-db290f1ba7e5"
    );
  };

  return (
    <section
      id={id}
      className="section"
      style={{ display: "block", opacity: 1, transform: "translateY(0)" }}
    >
      <div className="section-header">
        <span className="section-number">03</span>
        <h2 className="section-title">My Works</h2>
        <div className="section-line"></div>
      </div>

      <div className="works-content">
        <div className="projects-grid">

          {/* ================= LOAN TRACKER ================= */}
          <div className="project-card">
            <div className="project-image">
              <img src={loanTrackerImg} alt="Loan Tracker" />
              <div className="project-overlay">
                <div className="project-actions">
                  <button
                    className="action-btn"
                    onClick={() =>
                      openExternal("https://loan-trackerr.netlify.app/")
                    }
                    title="View Live Site"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => openModal("loan-tracker")}
                    title="View Images"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>Loan Tracker</h3>
              <p>
                A web app to track and manage monthly loans across Shopee Pay
                Later, GCash Loan, and other platforms.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React TypeScript</span>
                <span className="tech-tag">Web Application</span>
              </div>
            </div>
          </div>

          {/* ================= DORMHONORIO ================= */}
          <div className="project-card">
            <div className="project-image">
              <img src={dormHonorioImg} alt="DormHonorio" />
              <div className="project-overlay">
                <div className="project-actions">
                  <button
                    className="action-btn"
                    onClick={handleDownloadDorm}
                    title="View / Download Build"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => openModal("dormhonorio")}
                    title="View Images"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>DormHonorio</h3>
              <p>
                A mobile app that enables dormitory booking, with algorithm-based roommate matching recommendations.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React Native</span>
                <span className="tech-tag">Mobile App</span>
              </div>
            </div>
          </div>

          {/* ================= MEDIZONE ================= */}
          <div className="project-card">
            <div className="project-image">
              <img src={mediZoneImg} alt="MediZone Hospital Kiosk UI" />
              <div className="project-overlay">
                <div className="project-actions">
                  <button
                    className="action-btn"
                    onClick={() =>
                      openExternal(
                        "https://www.figma.com/proto/qHd6BKite0pmqQmJSvzAKw"
                      )
                    }
                    title="View Prototype"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => openModal("medizone")}
                    title="View Images"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>MediZone</h3>
              <p>
                A hospital kiosk web interface designed to provide patients with
                quick and accessible healthcare services.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Figma</span>
                <span className="tech-tag">UI/UX Design</span>
              </div>
            </div>
          </div>

          {/* ================= FUREVER CARE ================= */}
          <div className="project-card">
            <div className="project-image">
              <img src={furEverImg} alt="FurEver Care" />
              <div className="project-overlay">
                <div className="project-actions">
                  <button
                    className="action-btn"
                    onClick={() =>
                      openExternal(
                        "https://www.figma.com/proto/8frnL8VEIblY7EGPkcOZNq"
                      )
                    }
                    title="View Prototype"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => openModal("furever-care")}
                    title="View Images"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>FurEver Care</h3>
              <p>
                Platform to track pet health, manage breeding, and connect with
                trusted pet-loving community.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Figma</span>
                <span className="tech-tag">UI/UX Design</span>
              </div>
            </div>
          </div>

          {/* ================= MOOD MENU ================= */}
          <div className="project-card">
            <div className="project-image">
              <img src={moodHomeImg} alt="Mood Menu" />
              <div className="project-overlay">
                <div className="project-actions">
                  <button
                    className="action-btn"
                    onClick={() =>
                      openExternal(
                        "https://www.canva.com/design/DAGo0nSvLAs/_bNTWZDpJ76-Z_cDdcTyQg/edit"
                      )
                    }
                    title="View Prototype"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => openModal("mood-menu")}
                    title="View Images"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>Mood Menu</h3>
              <p>
                Mood Menu helps women with PCOS discover meals that fit how they
                feel, energy, and comfort.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Canva</span>
                <span className="tech-tag">UI Design</span>
              </div>
            </div>
          </div>

          {/* ================= AGRICART ================= */}
          <div className="project-card">
            <div className="project-image">
              <img src={agricartImg} alt="AgriCart" />
              <div className="project-overlay">
                <div className="project-actions">
                  <button
                    className="action-btn"
                    onClick={() =>
                      openExternal("https://www.canva.com/design/DAGgSUUCnLI")
                    }
                    title="View Prototype"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => openModal("agricart")}
                    title="View Images"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>AgriCart</h3>
              <p>
                Connects consumers directly with farmers, delivering fresh
                produce and supporting sustainable farming.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Canva</span>
                <span className="tech-tag">UI Design</span>
              </div>
            </div>
          </div>

          {/* ================= AV GUIDES ================= */}
          <div className="project-card">
            <div className="project-image">
              <img src={avGuidesImg} alt="AV Guides" />
              <div className="project-overlay">
                <div className="project-actions">
                  <button
                    className="action-btn"
                    onClick={() =>
                      openExternal("https://www.canva.com/design/DAGhHlAIK_c")
                    }
                    title="View Prototype"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => openModal("av-guides")}
                    title="View Images"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>AV Guides</h3>
              <p>
                Affordable Hotels, Flights & Tips. Book your stay today and start
                your next great adventure!
              </p>
              <div className="project-tech">
                <span className="tech-tag">Canva</span>
                <span className="tech-tag">UI Design</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

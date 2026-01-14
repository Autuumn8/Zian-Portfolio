import React, { useEffect, useState } from "react";
import profileImg from "../assets/PROFILE.jpg";

export default function ProfileSidebar({ open, onClose, onOpen }) {
  const [showInterests, setShowInterests] = useState(false);

  // Escape key to close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && open) onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  /* ================= SWIPE SUPPORT ================= */
  useEffect(() => {
    if (!("ontouchstart" in window)) return;

    const sidebar = document.querySelector(".profile-sidebar");
    if (!sidebar) return;

    let touchStartX = 0;
    let touchCurrentX = 0;
    let swiping = false;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchCurrentX = touchStartX;
      swiping = true;
      sidebar.style.transition = "none";
    };

    const handleTouchMove = (e) => {
      if (!swiping) return;
      touchCurrentX = e.touches[0].clientX;
      const deltaX = touchCurrentX - touchStartX;

      if (open && deltaX < 0) {
        // Only swipe left to close
        sidebar.style.transform = `translateX(${deltaX}px)`;
      }
    };

    const handleTouchEnd = () => {
      if (!swiping) return;
      swiping = false;
      sidebar.style.transition = "transform 0.3s ease";
      const deltaX = touchCurrentX - touchStartX;

      if (open) {
        if (deltaX < -80) onClose?.();
        else sidebar.style.transform = "translateX(0)";
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [open, onClose]);
  /* ================================================= */

  const interests = [
    { icon: "music", label: "Listening to Music" },
    { icon: "gamepad", label: "Playing Games" },
    { icon: "coffee", label: "Coffee Hopping" },
    { icon: "camera", label: "Photography" },
    { icon: "film", label: "Watching Movies" },
    { icon: "motorcycle", label: "Riding Motorcycle" },
  ];

  const toggleInterests = () => setShowInterests((prev) => !prev);

  return (
    <>
      {/* Sidebar */}
      <aside className={`profile-sidebar ${open ? "open" : ""}`}>
        <style>{`
          .profile-sidebar {
            position: fixed;
            left: 0;
            top: 0;
            width: 400px;
            height: 100vh;
            background: var(--bg-secondary);
            border-right: 1px solid var(--border-color);
            overflow-y: auto;
            z-index: 900;
            transform: translateX(-100%);
            transition: var(--transition);
          }
          .profile-sidebar.open {
            transform: translateX(0);
          }
          .profile-content {
            height: 100dvh;
            overflow-y: auto;
            padding: 60px 24px 48px;
          }
          .profile-image-container {
            margin-top: 50px;
            margin-bottom: 20px;
          }
          .profile-actions {
            margin-top: 24px;
          }
          @media (max-width: 768px) {
            .profile-sidebar {
              width: 100%;
            }
            .profile-content {
              padding-top: 80px;
              padding-bottom: 32px;
            }
            .profile-image-container {
              margin-top: 12px;
              margin-bottom: 16px;
            }
            .profile-actions {
              margin-top: 16px;
            }
          }
          .profile-interests {
            margin-bottom: 2rem;
            text-align: center;
          }
          .profile-interests h4 {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-primary);
            cursor: pointer;
            margin-bottom: 1rem;
          }
          .profile-interests h4::before,
          .profile-interests h4::after {
            content: "";
            flex: 1;
            height: 1px;
            background: var(--border-color);
          }
          .toggle-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            border: 1px solid var(--border-color);
            border-radius: 50%;
            font-size: 0.8rem;
            transition: transform 0.3s ease;
          }
          .toggle-icon i {
            pointer-events: none;
          }
          .interests-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 12px;
            transition: max-height 0.3s ease, opacity 0.3s ease;
          }
          .interests-hidden {
            max-height: 0;
            opacity: 0;
            pointer-events: none;
          }
          .interest-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 6px;
            padding: 12px 8px;
            border: 1px solid var(--border-color);
            border-radius: 12px;
            font-size: 0.9rem;
            color: var(--text-secondary);
            background-color: var(--bg-tertiary);
            transition: transform 0.2s ease, border-color 0.2s ease;
          }
          .interest-item:hover {
            border-color: var(--primary-color);
            transform: translateY(-2px);
          }
          .interest-item i {
            font-size: 1.3rem;
          }
        `}</style>

        <div className="profile-content">
          <div className="profile-image-container">
            <div className="profile-image">
              <img src={profileImg} alt="Zian Profile" id="profileImg" />
              <div className="profile-overlay">
                <i className="fas fa-camera"></i>
              </div>
            </div>
            <div className="status-indicator"></div>
          </div>

          <div className="profile-info">
            <h2 className="profile-name">Zian Daovic Alfonso</h2>

            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-number" data-target="3">5</span>
                <span className="stat-label">Tools</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-target="5">7</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-target="5">3</span>
                <span className="stat-label">Skills</span>
              </div>
            </div>

            <div className="profile-description">
              <p>
                A 4th-year BSIT student with a passion for technology, clean web
                design, and interactive websites. I enjoy creating digital
                solutions that are both functional and visually appealing.
              </p>
            </div>

            <div className="profile-interests">
              <h4 onClick={toggleInterests}>
                <span>What I Do in My Free Time</span>
                <div className="toggle-icon">
                  <i className={`fas fa-chevron-${showInterests ? "up" : "down"}`}></i>
                </div>
              </h4>
              <div className={`interests-grid ${showInterests ? "" : "interests-hidden"}`}>
                {interests.map((i, idx) => (
                  <div key={idx} className="interest-item">
                    <i className={`fas fa-${i.icon}`}></i>
                    <span>{i.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="profile-actions">
              <button
                className="btn btn-primary"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Zian-Portfolio/Zian_Resume.pdf"; 
                  link.download = "Zian_Resume.pdf"; 
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <i className="fas fa-download"></i> Download Resume
              </button>

              <div className="social-links">
                <a
                  href="https://www.facebook.com/znxxlfnso"
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://github.com/Autuumn8"
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:zianalfonso0518@gmail.com" className="social-link">
                  <i className="fas fa-envelope"></i>
                </a>
                <a
                  href="https://instagram.com/znxxlfnso"
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </aside>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${open ? "show" : ""}`}
        onClick={onClose}
      ></div>
    </>
  );
}

import React, { useEffect } from "react";

export default function Education({ id }) {
  useEffect(() => {
    try {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      }, observerOptions);

      setTimeout(() => {
        const elements = document.querySelectorAll(".education-item");
        elements.forEach((el) => {
          if (el) observer.observe(el);
        });
      }, 100);

      return () => observer.disconnect();
    } catch (error) {
      console.error("Observer error:", error);
    }
  }, []);

  return (
    <section
      id={id}
      className="section"
      style={{ display: "block", opacity: 1, transform: "translateY(0)" }}
    >
      {/* 🔹 Local responsive fix */}
      <style>{`
        .education-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .education-item {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }

        .education-year {
          min-width: 140px;
          font-weight: 600;
          white-space: nowrap;
        }

        .education-details {
          max-width: 100%;
        }

        /* 📱 MOBILE FIX */
        @media (max-width: 768px) {
          .education-item {
            flex-direction: column;
            gap: 0.75rem;
          }

          .education-year {
            min-width: auto;
            width: 100%;
            text-align: left;
          }

          .education-details h3,
          .education-details p {
            text-align: left;
            word-break: break-word;
            white-space: normal;
          }
        }
      `}</style>

      <div className="section-header">
        <span className="section-number">02</span>
        <h2 className="section-title">Education</h2>
        <div className="section-line"></div>
      </div>

      <div className="education-content">
        <div className="education-item">
          <div className="education-year">2021 - 2025</div>
          <div className="education-details">
            <h3>Bachelor of Science in Information Technology</h3>
            <p className="education-school">Pampanga State University</p>
            <p className="education-description">
              Currently in my 4th year, exploring frontend development and UI/UX design.
              I enjoy creating clean, user-friendly designs and turning them into
              functional websites while continuously improving my skills and creativity.
            </p>
            <p className="education-awards">
              Consistent Dean’s and President’s Lister
            </p>
          </div>
        </div>

        <div className="education-item">
          <div className="education-year">2019 - 2021</div>
          <div className="education-details">
            <h3>Senior High School - STEM Strand</h3>
            <p className="education-school">San Juan High School</p>
            <p className="education-description">
              STEM strand graduate with a strong foundation in science, mathematics,
              and research, equipped with analytical thinking, problem-solving, and
              adaptability skills that can be applied to technology and innovative projects.
            </p>
            <p className="education-awards">Consistent Honor Student</p>
          </div>
        </div>
      </div>
    </section>
  );
}

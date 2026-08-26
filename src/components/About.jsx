import React, { useEffect } from "react";

export default function About({ id }) {
  useEffect(() => {
    // Simplified observer without potential errors
    try {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            // trigger skill bars if skill-item
            if (entry.target.classList.contains("skill-item")) {
              const bars = entry.target.querySelectorAll(".skill-progress");
              bars.forEach((bar) => {
                const w = bar.getAttribute("data-width");
                if (w) {
                  bar.style.width = w;
                }
              });
            }
          }
        });
      }, observerOptions);

      // Use setTimeout to ensure elements exist
      setTimeout(() => {
        const elements = document.querySelectorAll(".skill-item, .project-card, .education-item");
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
    <section id={id} className="section active" style={{display: 'block', opacity: 1, transform: 'translateY(0)'}}>
      <div className="section-header">
        <span className="section-number">01</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-line"></div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>Let me introduce myself</h3>
          <p>
            I'm a 4th-year BSIT student who enjoys building websites, designing
            graphics, and working with tech. I've had hands-on experience in IT
            support, helping resolve hardware, software, and network issues while
            also contributing to UI/UX improvements in internal systems.
          </p>
          <p>
            I like wearing multiple hats — whether it's writing code, creating
            visuals in Figma or Photoshop, or troubleshooting tech problems.
            I'm always up for learning something new.
          </p>

          <div className="experience-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <div className="highlight-content">
                <h4>Visual Design</h4>
                <p>Designing graphics and interfaces using Figma, Photoshop, and Illustrator.</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="highlight-content">
                <h4>Clean Code</h4>
                <p>Writing maintainable and scalable code that follows best practices.</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-tools"></i>
              </div>
              <div className="highlight-content">
                <h4>IT Support</h4>
                <p>Hands-on experience resolving hardware, software, and network issues.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">

            {/* Frontend Section */}
            <div className="skill-category">
              <h4>Frontend</h4>
              <div className="skill-list">
                <div className="skill-item">
                  <span className="skill-name">HTML / CSS / JavaScript</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="85%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">React.js / React Native / TypeScript</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="75%"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Section */}
            <div className="skill-category">
              <h4>Tools</h4>
              <div className="skill-list">
                <div className="skill-item">
                  <span className="skill-name">Git</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="70%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Figma</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="90%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Canva</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="100%"></div>
                  </div>
                </div>
                <div className="skill-item animate-in">
                  <span className="skill-name">Photoshop</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="75%" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="skill-item animate-in">
                  <span className="skill-name">Illustrator</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="50%" style={{ width: "50%" }}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

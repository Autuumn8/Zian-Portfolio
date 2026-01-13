import React, { useEffect, useRef } from "react";

export default function Home() {
  const typingRef = useRef(null);

  useEffect(() => {
    const typingElement = document.getElementById("typingText");
    if (!typingElement) return;

    const texts = ["Frontend Developer", "UI/UX Designer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const typeText = () => {
      const currentText = texts[textIndex];

      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = 100;
      if (isDeleting) typeSpeed /= 2;

      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
      }

      timeout = setTimeout(typeText, typeSpeed);
    };

    timeout = setTimeout(typeText, 500);
    return () => clearTimeout(timeout);
  }, []);

  // Floating animation (works on desktop & mobile)
  useEffect(() => {
    const items = document.querySelectorAll(".float-item");
    const intervals = [];

    items.forEach((item, index) => {
      const speed = parseFloat(item.getAttribute("data-speed")) || 0.5;

      // Random initial position
      item.style.left = Math.random() * 100 + "%";
      item.style.top = Math.random() * 100 + "%";

      const id = setInterval(() => {
        item.style.transition = `all ${2 + speed}s ease-in-out`;
        item.style.left = Math.random() * 80 + 10 + "%";
        item.style.top = Math.random() * 80 + 10 + "%";
      }, (3000 + index * 500) / speed);

      intervals.push(id);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section id="home" className="section active">
      <style>{`
        /* DESKTOP DEFAULT */
        .hero-text {
          text-align: left;
        }
        .hero-title {
          text-align: inherit;
        }
        #typingText {
          display: inline-block;
          min-width: 20ch;
          text-align: left;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }
        .float-item {
          position: absolute;
          font-size: 2rem;
          opacity: 0.8;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .hero-text {
            text-align: center;
          }
          .hero-buttons {
            justify-content: center;
          }
          #typingText {
            min-width: 18ch;
            text-align: center;
            font-size: 1.6rem;
          }

          .float-item {
            font-size: 1.2rem; /* smaller icons on mobile */
            opacity: 0.4;      /* subtle effect */
          }
        }
      `}</style>

      <div className="hero-content" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-text">
          <div className="hero-greeting">
            <span className="greeting-text">Hello, I'm Zian</span>
          </div>

          <h1 className="hero-title">
            <span className="title-sub" id="typingText" ref={typingRef}>
              Frontend Developer
            </span>
          </h1>

          <p className="hero-description">
            I create <span className="highlight">beautiful</span> and{" "}
            <span className="highlight">functional</span> web experiences that
            engage users and drive results. Let's build something amazing
            together.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => window.scrollToSection?.("works")}
            >
              <i className="fas fa-rocket"></i> View My Works
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => window.scrollToSection?.("contact")}
            >
              <i className="fas fa-comment"></i> Let's Talk
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-elements">
            <div className="float-item" data-speed="0.5">
              <i className="fab fa-html5"></i>
            </div>
            <div className="float-item" data-speed="0.8">
              <i className="fab fa-css3-alt"></i>
            </div>
            <div className="float-item" data-speed="0.3">
              <i className="fab fa-js-square"></i>
            </div>
            <div className="float-item" data-speed="0.6">
              <i className="fab fa-react"></i>
            </div>
            <div className="float-item" data-speed="0.4">
              <i className="fab fa-figma"></i>
            </div>
            <div className="float-item" data-speed="0.7">
              <i className="devicon-typescript-plain colored"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useRef, useState } from "react";

const imageNumbers = Array.from({ length: 15 }, (_, i) => i + 1);

export default function Gallery() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredIndex, setHoveredIndex] = useState(null); // track hovered card
  const [centerIndex, setCenterIndex] = useState(null);   // track center card

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      if (!containerRef.current || !cardRefs.current.length) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestCard = null;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestCard = card;
          setCenterIndex(i); // track center card
        }

        card.classList.remove("is-center");
      });

      if (closestCard) closestCard.classList.add("is-center");
    }, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="gallery-wrapper">
      <div className="section-header">
        <span className="section-number">05</span>
        <h2 className="section-title">Gallery</h2>
        <div className="section-line"></div>
      </div>

      <div className="gallery-marquee-container" ref={containerRef}>
        <div className="gallery-track" ref={trackRef}>
          {[...imageNumbers, ...imageNumbers].map((num, index) => {
            const isHovered = hoveredIndex === index;
            const isCenter = centerIndex === index;

            return (
              <div
                className="gallery-card"
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform: isHovered
                    ? "scale(1.2)"
                    : isCenter && !hoveredIndex
                    ? "scale(1.08)"
                    : "scale(1)",
                  filter: isHovered
                    ? "grayscale(0%)"
                    : !hoveredIndex
                    ? isCenter
                      ? "grayscale(0%)"
                      : "grayscale(100%)"
                    : "grayscale(100%) brightness(0.6)",
                  zIndex: isHovered ? 10 : isCenter && !hoveredIndex ? 3 : 1,
                  transition: "all 0.4s ease",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={
                    new URL(`../assets/Gallery/${num}.jpg`, import.meta.url).href
                  }
                  alt={`Gallery photo ${num}`}
                  loading="lazy"
                  style={{ borderRadius: "12px" }}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/280x380?text=Image+Missing";
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= FOOTER ================= */}
<footer
  style={{
    textAlign: "center",
    marginTop: "10rem",           // smaller top margin for better spacing
    marginBottom: "-3rem",        // positive margin instead of negative
    color: "#888",
    fontSize: "clamp(0.75rem, 2vw, 0.9rem)", // responsive font size
    fontStyle: "italic",
    padding: "0 1rem",           // prevents text from touching edges on small screens
  }}
>
  © {new Date().getFullYear()} Zian. All rights reserved. Built with passion.
</footer>

    </div>
  );
}

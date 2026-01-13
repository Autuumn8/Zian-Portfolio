import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth <= 768;
    if (isTouch) {
      if (cursorRef.current) cursorRef.current.style.display = "none";
      if (followerRef.current) followerRef.current.style.display = "none";
      document.body.style.cursor = "auto";
      return;
    }

    let mouseX = 0,
      mouseY = 0,
      cursorX = 0,
      cursorY = 0,
      followerX = 0,
      followerY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", onMove);

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.9;
      cursorY += (mouseY - cursorY) * 0.9;
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX - 5}px, ${cursorY - 5}px)`;
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const hoverElements = document.querySelectorAll("a, button, .project-card, .nav-link");
    const addHover = () => {
      if (cursorRef.current) cursorRef.current.classList.add("is-link");
      if (followerRef.current) followerRef.current.classList.add("is-link");
    };
    const removeHover = () => {
      if (cursorRef.current) cursorRef.current.classList.remove("is-link");
      if (followerRef.current) followerRef.current.classList.remove("is-link");
    };
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  );
}

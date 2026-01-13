import React from "react";

export default function SwipeIndicator({ onOpenSidebar }) {
  return (
    <div
      className="swipe-indicator"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (typeof onOpenSidebar === "function") onOpenSidebar();
      }}
    >
      <div className="swipe-handle">
        <div className="handle-line"></div>
      </div>
    </div>
  );
}

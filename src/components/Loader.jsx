import React, { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setHidden(true);
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="loader" className={`loader ${hidden ? "hidden" : ""}`}>
      <div className="loader-content">
        <div className="loader-circle"></div>
        <p>Loading Portfolio...</p>
      </div>
    </div>
  );
}

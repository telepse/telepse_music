"use client";

import { useEffect } from "react";

export const PlaylistEmbed = () => {
  useEffect(() => {
    // Dynamically load Elfsight script only on this page
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when navigating away
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="elfsight-app-8d9f2d1c-7dfe-4c31-91af-fd53af34a8d4"
      data-elfsight-app-lazy
    ></div>
  );
};

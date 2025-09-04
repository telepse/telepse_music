"use client";

import { useEffect } from "react";

export const TelepsePlaylist = () => {
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
    <section className="section wrapper w-full p-0 sm:px-4 sm:py-8">
      <div
        className="elfsight-app-5181936a-2b1e-459b-8185-f7684f28bc5d"
        data-elfsight-app-lazy
      ></div>
    </section>
  );
};

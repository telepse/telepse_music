"use client";

import { useEffect } from "react";

export const InstagramFeed = () => {
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
    <section className="section wrapper w-full">
      <div className="flex justify-center">
        <span className="badge">Follow Telepse Music on Instagram</span>
      </div>

      <div
        className="elfsight-app-1dc5fc5c-7932-4a41-8ad2-0fa000eeda52"
        data-elfsight-app-lazy
      ></div>
    </section>
  );
};

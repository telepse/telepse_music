"use client";

import { useEffect } from "react";

interface YoutubeChannelProps {
  hasTitle?: boolean;
}

export const YoutubeChannel = ({ hasTitle = true }: YoutubeChannelProps) => {
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
    <section className="section wrapper mt-12 w-full p-0 sm:px-4 sm:py-8">
      {hasTitle && (
        <div className="flex justify-center">
          <span className="badge">Subscribe to Telepse TV</span>
        </div>
      )}

      <div
        className="elfsight-app-54dff201-391f-44d3-a15d-73faea2e3f62"
        data-elfsight-app-lazy
      ></div>
    </section>
  );
};

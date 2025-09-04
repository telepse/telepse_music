"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const ScrollToSection = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  useEffect(() => {
    if (!section) return;

    let attempts = 0;
    const maxAttempts = 40; // ~2 seconds
    const timer = setInterval(() => {
      attempts += 1;
      const el = document.getElementById(section);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", pathname); // clean URL
        clearInterval(timer);
      } else if (attempts >= maxAttempts) {
        // stop trying, but still clean URL
        window.history.replaceState(null, "", pathname);
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [section, pathname]);

  return null;
};

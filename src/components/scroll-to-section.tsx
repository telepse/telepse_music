"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const ScrollToSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  useEffect(() => {
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });

        // Clean up URL so only https://music.telepse.com shows
        router.replace("/", { scroll: false });
      }
    }
  }, [section, router]);

  return null;
};

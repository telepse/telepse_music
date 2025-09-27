"use client";

import Image from "next/image";
import Link from "next/link";

// Third-party imports
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "react-responsive";

// Local imports
import { Title } from "@/components/title";

export default function NotFound() {
  const isMediumScreen = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="wrapper section grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2">
      <Image
        src="/Telepse_digital_marketing_agency_lagos_nigeria_404.png"
        alt="Error 404"
        width={500}
        height={500}
        className="h-60 w-80 object-contain sm:h-[400px] sm:w-[550px]"
      />

      <div className="space-y-4">
        <Title
          align={isMediumScreen ? "center" : "left"}
          size="lg"
        >
          Error 404
        </Title>
        <Title align={isMediumScreen ? "center" : "left"}>
          Oops, are you lost?
        </Title>

        <div className="flex gap-4">
          <Link href="https://telepse.com">
            <Button
              variant="default"
              size="xl"
            >
              Go home
            </Button>
          </Link>
          <Link href="https://telepse.com/contact">
            <Button
              variant="gray"
              size="xl"
            >
              Get in touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

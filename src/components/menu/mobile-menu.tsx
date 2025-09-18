"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Third-party imports
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

// Local imports
import { Logo } from "./logo";

export const MobileMenu = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const goToTop = (path: string) => {
    router.push(`https://telepse.com${path}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Close sidebar on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close sidebar on hash change
  useEffect(() => {
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        setTimeout(() => {
          setOpen(false);
        }, 100);
      }
    };

    document.addEventListener("click", handleHashLinkClick);
    return () => document.removeEventListener("click", handleHashLinkClick);
  }, []);

  // const handleHashNavigation = (pathWithHash: string) => {
  //   const url = new URL(pathWithHash, window.location.origin);

  //   if (url.pathname === window.location.pathname) {
  //     // ✅ same page, update hash and scroll
  //     const hash = url.hash.replace("#", "");
  //     if (hash) {
  //       window.location.hash = url.hash;
  //       const el = document.getElementById(hash);
  //       if (el) {
  //         el.scrollIntoView({ behavior: "smooth"});
  //       }
  //     }
  //   } else {
  //     // ✅ different page, let Next.js handle it
  //     router.push(pathWithHash);
  //   }

  //   setOpen(false);
  // };

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu className="size-8" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-60"
      >
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <Button
          variant="link"
          className="w-full justify-start px-4 py-1.5 text-lg"
          onClick={() => goToTop("/")}
        >
          Home
        </Button>

        {/* Accordion for mobile nav */}
        <Accordion
          type="single"
          collapsible
          className="hide__scrollbar -mt-2 w-full overflow-y-auto"
        >
          {/* Services */}
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-2"
          >
            <AccordionItem
              value="services"
              className="px-4"
            >
              <AccordionTrigger>Services</AccordionTrigger>
              <AccordionContent className="px-4">
                <Accordion
                  type="single"
                  collapsible
                >
                  <AccordionItem value="content">
                    <AccordionTrigger>
                      <span
                        onClick={() => goToTop("/services/content-marketing")}
                      >
                        Content marketing
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col items-start gap-2 pl-4">
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() => {
                          goToTop("/services/content-marketing#brand_message");
                          setOpen(false);
                        }}
                      >
                        Brand message
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() => {
                          goToTop(
                            "/services/content-marketing#marketing_strategy"
                          );
                          setOpen(false);
                        }}
                      >
                        Marketing strategy
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() => {
                          goToTop("/services/content-marketing#content_design");
                          setOpen(false);
                        }}
                      >
                        Content design
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Button
                  variant="link"
                  className="p-0 text-lg"
                  onClick={() => goToTop("/services/social-media-marketing")}
                >
                  Social media marketing
                </Button>

                <Accordion
                  type="single"
                  collapsible
                >
                  <AccordionItem value="digital">
                    <AccordionTrigger>
                      <span
                        onClick={() => goToTop("/services/digital-marketing")}
                      >
                        Digital marketing
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col items-start gap-2 px-4">
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() => {
                          goToTop(
                            "/services/digital-marketing#email_marketing"
                          );
                          setOpen(false);
                        }}
                      >
                        Email marketing
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() => {
                          goToTop("/services/digital-marketing#web_conversion");
                          setOpen(false);
                        }}
                      >
                        Web conversion
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() => {
                          goToTop("/services/digital-marketing#seo");
                          setOpen(false);
                        }}
                      >
                        SEO
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() => {
                          goToTop("/services/digital-marketing#google_ads");
                          setOpen(false);
                        }}
                      >
                        Google ads
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Solutions */}
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-2"
          >
            <AccordionItem
              value="solutions"
              className="px-4"
            >
              <AccordionTrigger>Solutions</AccordionTrigger>
              <AccordionContent className="px-4">
                {/* Marketing solutions */}
                <Accordion
                  type="single"
                  collapsible
                >
                  <AccordionItem value="marketing">
                    <AccordionTrigger>
                      <span onClick={() => goToTop("/solutions")}>
                        Marketing
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col items-start gap-2 pl-4">
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() => {
                          goToTop("/solutions#b2b");
                          setOpen(false);
                        }}
                      >
                        B2B marketing
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() => {
                          goToTop("/solutions#b2c");
                          setOpen(false);
                        }}
                      >
                        B2C marketing
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() => {
                          goToTop("/solutions#online_advertising");
                          setOpen(false);
                        }}
                      >
                        Online advertising
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Tech solutions */}
                <Accordion
                  type="single"
                  collapsible
                >
                  <AccordionItem value="tech">
                    <AccordionTrigger>
                      <span
                        onClick={() => goToTop("/solutions/digital-technology")}
                      >
                        Tech
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col items-start gap-2 pl-4">
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() => {
                          goToTop("/solutions/digital-technology#prd");
                          setOpen(false);
                        }}
                      >
                        Product requirements
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() => {
                          goToTop(
                            "/solutions/digital-technology#analytics_intelligence"
                          );
                          setOpen(false);
                        }}
                      >
                        Analytics intelligence
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() => {
                          goToTop(
                            "/solutions/digital-technology#digital_transform"
                          );
                          setOpen(false);
                        }}
                      >
                        Digital transform
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Tech page links */}
          <Button
            variant="link"
            className="mt-2 w-full justify-start px-4 py-1.5 text-lg"
            onClick={() => goToTop("/tech")}
          >
            Products
          </Button>

          {/* Company */}
          <Accordion
            type="single"
            collapsible
            className="mt-2 w-full space-y-2"
          >
            <AccordionItem
              value="company"
              className="px-4"
            >
              <AccordionTrigger>Company</AccordionTrigger>
              <AccordionContent className="flex flex-col items-start gap-2 pl-4">
                <Button
                  variant="link"
                  className="p-0 text-base"
                  onClick={() => goToTop("/about")}
                >
                  About
                </Button>
                <Button
                  variant="link"
                  className="p-0 text-base"
                  onClick={() => goToTop("/case-study")}
                >
                  Case study
                </Button>
                <Button
                  variant="link"
                  className="p-0 text-base"
                  onClick={() => goToTop("/contact")}
                >
                  Contact
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

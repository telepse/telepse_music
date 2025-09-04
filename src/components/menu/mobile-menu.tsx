"use client";

import { useRouter } from "next/navigation";

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
import { NAV_LINKS } from "@/constants";
import { Logo } from "./logo";

export const MobileMenu = () => {
  const router = useRouter();

  const goToTop = (path: string) => {
    router.push(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Sheet>
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

        {/* Accordion for mobile nav */}
        <Accordion
          type="single"
          collapsible
          className="hide__scrollbar w-full overflow-y-auto"
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
                    <AccordionTrigger>Content marketing</AccordionTrigger>
                    <AccordionContent className="flex flex-col items-start gap-2 pl-4">
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() =>
                          goToTop("/services/content-marketing#brand_message")
                        }
                      >
                        Brand message
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() =>
                          goToTop(
                            "/services/content-marketing#marketing_strategy"
                          )
                        }
                      >
                        Marketing strategy
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() =>
                          goToTop("/services/content-marketing#content_design")
                        }
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
                    <AccordionTrigger>Digital marketing</AccordionTrigger>
                    <AccordionContent className="flex flex-col items-start gap-2 px-4">
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() =>
                          goToTop("/services/digital-marketing#email_marketing")
                        }
                      >
                        Email marketing
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() =>
                          goToTop("/services/digital-marketing#web_conversion")
                        }
                      >
                        Web conversion
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() =>
                          goToTop("/services/digital-marketing#seo")
                        }
                      >
                        SEO
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() =>
                          goToTop("/services/digital-marketing#google_ads")
                        }
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
                    <AccordionTrigger>Marketing</AccordionTrigger>
                    <AccordionContent className="flex flex-col items-start gap-2 pl-4">
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() => goToTop("/solutions#b2b")}
                      >
                        B2B marketing
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() => goToTop("/solutions#b2c")}
                      >
                        B2C marketing
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() => goToTop("/solutions#online_advertising")}
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
                    <AccordionTrigger>Tech</AccordionTrigger>
                    <AccordionContent className="flex flex-col items-start gap-2 pl-4">
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() =>
                          goToTop("/solutions/digital-technology#prd")
                        }
                      >
                        Product requirements design
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() =>
                          goToTop(
                            "/solutions/digital-technology#analytics_intelligence"
                          )
                        }
                      >
                        Analytics intelligence
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={() =>
                          goToTop(
                            "/solutions/digital-technology#digital_transform"
                          )
                        }
                      >
                        Digital transform
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Company */}
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-2"
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
                  onClick={() => goToTop("/contact")}
                >
                  Contact
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Case study and tech page links */}
          <div className="mt-2 space-y-4">
            {NAV_LINKS.map((item, index) => (
              <Button
                key={index}
                variant="link"
                className="w-full justify-start px-4 py-1.5 text-lg"
                onClick={() => goToTop(item.href)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

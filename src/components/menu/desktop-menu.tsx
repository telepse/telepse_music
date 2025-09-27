"use client";

import { useRouter } from "next/navigation";

// Third-party imports
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

// Local imports
import { NavLink } from "./nav-link";

interface DesktopMenuProps {
  className?: string;
}

export const DesktopMenu = ({ className = "" }: DesktopMenuProps) => {
  const router = useRouter();

  // Helper to ensure scroll-to-top on navigation
  const goToTop = (path: string) => {
    router.push(`https://www.telepse.com${path}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={className}>
      <NavLink
        label="Home"
        href="https://www.telepse.com"
      />

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="font-medium"
          >
            Services <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {/* Content marketing */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger
              onClick={() => goToTop("/services/content-marketing")}
            >
              Content marketing
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem
                onClick={() =>
                  goToTop("/services/content-marketing#brand_message")
                }
              >
                Brand message
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  goToTop("/services/content-marketing#marketing_strategy")
                }
              >
                Marketing strategy
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  goToTop("/services/content-marketing#content_design")
                }
              >
                Content design
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          {/* Social media marketing */}
          <DropdownMenuItem
            onClick={() => goToTop("/services/social-media-marketing")}
          >
            Social media marketing
          </DropdownMenuItem>

          {/* Digital marketing */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger
              onClick={() => goToTop("/services/digital-marketing")}
            >
              Digital marketing
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem
                onClick={() =>
                  goToTop("/services/digital-marketing#email_marketing")
                }
              >
                Email marketing
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  goToTop("/services/digital-marketing#web_conversion")
                }
              >
                Web conversion
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => goToTop("/services/digital-marketing#seo")}
              >
                SEO
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  goToTop("/services/digital-marketing#google_ads")
                }
              >
                Google ads
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Solutions */}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="font-medium"
          >
            Solutions <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {/* Tech solutions */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger onClick={() => goToTop("/solutions")}>
              Marketing
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem onClick={() => goToTop("/solutions#b2b")}>
                B2B marketing
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => goToTop("/solutions#b2c")}>
                B2C marketing
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => goToTop("/solutions#online_advertising")}
              >
                Online advertising
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          {/* Digital technology */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger
              onClick={() => goToTop("/solutions/digital-technology")}
            >
              Tech
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem
                onClick={() => goToTop("/solutions/digital-technology#prd")}
              >
                Product requirements design
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  goToTop(
                    "/solutions/digital-technology#analytics_intelligence"
                  )
                }
              >
                Analytics intelligence
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  goToTop("/solutions/digital-technology#digital_transform")
                }
              >
                Digital transform
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>

      <NavLink
        label="Products"
        href="https://www.telepse.com/tech"
      />

      {/* Company pages */}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="font-medium"
          >
            Company <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => goToTop("/about")}>
            About
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => goToTop("/case-study")}>
            Case study
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => goToTop("/contact")}>
            Contact
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

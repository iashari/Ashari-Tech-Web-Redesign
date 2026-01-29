"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import GlassSurface from "./GlassSurface";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Only track sections on homepage
      if (pathname !== "/") return;

      // Determine which section is currently in view
      const sections = ["about", "services", "portfolio", "faq"];
      const scrollPosition = window.scrollY + 100;

      let currentSection = "home";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navItems = [
    { label: t("nav.home"), href: "/", section: "home" },
    { label: t("nav.about"), href: "/#about", section: "about" },
    { label: t("nav.services"), href: "/#services", section: "services" },
    { label: t("nav.portfolio"), href: "/portfolio", section: "portfolio" },
    { label: t("nav.pricing"), href: "/pricing", section: "pricing" },
  ];

  const isActive = (href: string, section: string) => {
    // For non-homepage routes
    if (pathname !== "/") {
      if (href === "/") return false;
      if (href.startsWith("/#")) return false;
      return pathname.startsWith(href);
    }

    // For homepage, use scroll-based active section
    if (href === "/" && section === "home") {
      return activeSection === "home";
    }
    if (href.startsWith("/#")) {
      return activeSection === section;
    }
    return false;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Handle Home link - scroll to top
    if (href === "/") {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        setMobileOpen(false);
      }
      return;
    }

    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");

      // If we're not on the home page, navigate there first
      if (pathname !== "/") {
        window.location.href = href;
        return;
      }

      const el = document.getElementById(id);
      if (el) {
        // Calculate proper offset - smaller value = scrolls more
        const navbarOffset = -10;
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      setMobileOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`mx-auto transition-all duration-500 ease-out ${
          scrolled
            ? "max-w-5xl mt-4 mx-4 md:mx-auto"
            : "max-w-full"
        }`}
      >
        <div className="relative">
          {/* Glass background layer */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ease-out rounded-full overflow-hidden ${
              scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <GlassSurface
              width="100%"
              height="100%"
              borderRadius={50}
              borderWidth={0}
              brightness={50}
              opacity={0.93}
              blur={4}
              displace={0}
              distortionScale={-300}
              redOffset={-50}
              greenOffset={-50}
              blueOffset={-50}
              className="!w-full !h-full"
            />
          </div>

          {/* Nav content */}
          <div
            className={`relative z-10 flex items-center justify-between transition-all duration-500 ease-out ${
              scrolled ? "px-6 py-3" : "px-6 md:px-16 py-5"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <svg
                className="w-7 h-5"
                viewBox="105 154 290 191"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M198.965 221L257.586 221L250 249.5L242.414 278L227.242 335H285.863L301.035 278L316.208 221H374.827L390 164L331.38 164H272.759H214.137H155.517L198.965 221ZM198.965 221L191.379 249.5L183.792 278L168.62 335H110L125.172 278L140.345 221L198.965 221Z"
                  fill="#6106DF"
                />
              </svg>
              <span className="text-sm font-medium text-white tracking-tight">
                Ashari<span className="text-white/40">.Tech</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-xs uppercase tracking-[0.15em] font-light transition-colors ${
                      isActive(item.href, item.section)
                        ? "text-white"
                        : "text-white/40 hover:text-white/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side: CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://wa.me/6285280452688"
                target="_blank"
                className="relative rounded-full overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="absolute inset-0">
                  <GlassSurface
                    width="100%"
                    height="100%"
                    borderRadius={50}
                    borderWidth={0}
                    brightness={50}
                    opacity={0.93}
                    blur={4}
                    displace={0}
                    distortionScale={-300}
                    redOffset={-50}
                    greenOffset={-50}
                    blueOffset={-50}
                    className="!w-full !h-full"
                  />
                </div>
                <span className="relative z-10 px-4 py-2 text-white text-xs">
                  {t("nav.contact")} →
                </span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-1"
              aria-label="Toggle menu"
            >
              <span
                className={`w-5 h-[1.5px] bg-white/70 rounded transition-all ${
                  mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`w-5 h-[1.5px] bg-white/70 rounded transition-all ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-[1.5px] bg-white/70 rounded transition-all ${
                  mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mx-4 mt-2">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <GlassSurface
                width="100%"
                height="100%"
                borderRadius={16}
                borderWidth={0}
                brightness={50}
                opacity={0.93}
                blur={4}
                displace={0}
                distortionScale={-300}
                redOffset={-50}
                greenOffset={-50}
                blueOffset={-50}
                className="!w-full !h-full"
              />
            </div>
            <div className="relative z-10 p-4">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        handleNavClick(e, item.href);
                        setMobileOpen(false);
                      }}
                      className={`block px-4 py-3 rounded-lg text-xs uppercase tracking-[0.15em] font-light transition-all ${
                        isActive(item.href, item.section)
                          ? "text-white bg-white/5"
                          : "text-white/40 hover:text-white/80"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-2">
                  <a
                    href="https://wa.me/6285280452688"
                    target="_blank"
                    className="relative block w-full rounded-full overflow-hidden hover:scale-105 transition-transform"
                  >
                    <div className="absolute inset-0">
                      <GlassSurface
                        width="100%"
                        height="100%"
                        borderRadius={50}
                        borderWidth={0}
                        brightness={50}
                        opacity={0.93}
                        blur={4}
                        displace={0}
                        distortionScale={-300}
                        redOffset={-50}
                        greenOffset={-50}
                        blueOffset={-50}
                        className="!w-full !h-full"
                      />
                    </div>
                    <span className="relative z-10 block text-center px-4 py-3 text-white text-xs">
                      {t("nav.contact")} →
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

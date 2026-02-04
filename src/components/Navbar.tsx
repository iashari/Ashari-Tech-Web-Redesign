"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import GlassSurface from "./GlassSurface";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (pathname !== "/") return;

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

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: t("nav.home"), href: "/", section: "home" },
    { label: t("nav.about"), href: "/#about", section: "about" },
    { label: t("nav.portfolio"), href: "/portfolio", section: "portfolio" },
    { label: t("nav.blog"), href: "/blog", section: "blog" },
    { label: t("nav.pricing"), href: "/pricing", section: "pricing" },
  ];

  const serviceItems = [
    {
      label: t("nav.ai"),
      href: "/ai-solutions-indonesia",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-violet-500 to-purple-600",
    },
    {
      label: "Website & Company Profile",
      href: "/layanan/website-company-profile",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      label: "SEO & Content Marketing",
      href: "/layanan/seo-content-marketing",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      label: "Social Media & Digital Ads",
      href: "/layanan/social-media-digital-ads",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
      gradient: "from-orange-500 to-pink-500",
    },
  ];

  const isActive = (href: string, section: string) => {
    if (pathname !== "/") {
      if (href === "/") return false;
      if (href.startsWith("/#")) return false;
      return pathname.startsWith(href);
    }

    if (href === "/" && section === "home") {
      return activeSection === "home";
    }
    if (href.startsWith("/#")) {
      return activeSection === section;
    }
    return false;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/") {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setMobileOpen(false);
      }
      return;
    }

    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");

      if (pathname !== "/") {
        window.location.href = href;
        return;
      }

      const el = document.getElementById(id);
      if (el) {
        const navbarOffset = -10;
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarOffset;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
      setMobileOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`mx-auto transition-all duration-500 ease-out ${
          scrolled ? "max-w-5xl mt-4 mx-4 md:mx-auto" : "max-w-full"
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
              <span className="text-sm font-semibold tracking-tight text-white">
                Ashari<span className="text-white/70">.Tech</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-6">
              {navItems.slice(0, 2).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative text-xs uppercase tracking-[0.15em] font-medium transition-colors py-2 ${
                      isActive(item.href, item.section)
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive(item.href, item.section) && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                </li>
              ))}

              {/* Services Dropdown */}
              <li className="relative" ref={servicesRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors py-2 flex items-center gap-1.5 ${
                    pathname.includes("/layanan") || pathname.includes("/ai-solutions")
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {t("nav.services")}
                  <motion.svg
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.8 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-5 origin-top"
                    >
                      <motion.div
                        className="relative rounded-2xl overflow-hidden"
                        initial={{ boxShadow: "0 0 0 rgba(97, 6, 223, 0)" }}
                        animate={{ boxShadow: "0 20px 40px rgba(97, 6, 223, 0.15)" }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        {/* Glass Background */}
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

                        {/* Content */}
                        <div className="relative z-10 p-2">
                          <div className="flex flex-col gap-1">
                            {serviceItems.map((item, index) => (
                              <motion.div
                                key={item.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.04, type: "spring", stiffness: 400, damping: 25 }}
                              >
                                <Link
                                  href={item.href}
                                  onClick={() => setServicesOpen(false)}
                                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                                    pathname === item.href ? "text-white" : "text-white/60 hover:text-white"
                                  }`}
                                >
                                  <span className={`p-2 rounded-lg bg-gradient-to-br ${item.gradient} text-white group-hover:scale-105 transition-transform`}>
                                    {item.icon}
                                  </span>
                                  <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                                </Link>
                              </motion.div>
                            ))}

                            {/* See All */}
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: serviceItems.length * 0.04, type: "spring", stiffness: 400, damping: 25 }}
                              className="border-t border-white/10 mt-1 pt-1"
                            >
                              <Link
                                href="/pricing"
                                onClick={() => setServicesOpen(false)}
                                className="group flex items-center justify-between px-4 py-3 rounded-xl transition-all hover:bg-white/5"
                              >
                                <span className="text-white/70 text-sm font-medium">Lihat Semua Harga</span>
                                <svg className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {navItems.slice(2).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative text-xs uppercase tracking-[0.15em] font-medium transition-colors py-2 ${
                      isActive(item.href, item.section)
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive(item.href, item.section) && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side: CTA */}
            <div className="hidden md:flex items-center gap-3">
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
                <span className="relative z-10 px-4 py-2 text-white text-xs font-medium block">
                  {t("nav.contact")} →
                </span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-5 h-[2px] bg-white/80 rounded block"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-[2px] bg-white/80 rounded block"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-5 h-[2px] bg-white/80 rounded block"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mx-4 mt-2 overflow-hidden"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
              <div className="relative z-10 p-4">
                {/* Main Nav Items */}
                <div className="space-y-1 mb-4">
                  {navItems.slice(0, 2).map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          handleNavClick(e, item.href);
                          setMobileOpen(false);
                        }}
                        className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          isActive(item.href, item.section)
                            ? "text-white bg-primary/20"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Services Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mb-4"
                >
                  <div className="px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                    {t("nav.services")}
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {serviceItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block p-3 rounded-xl transition-all ${
                            pathname === item.href
                              ? "bg-primary/20"
                              : "bg-white/5 hover:bg-white/10"
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-2`}>
                            {item.icon}
                          </div>
                          <div className="text-white text-xs font-medium leading-tight">
                            {item.label}
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Other Nav Items */}
                <div className="space-y-1 pt-4 border-t border-white/10">
                  {navItems.slice(2).map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          handleNavClick(e, item.href);
                          setMobileOpen(false);
                        }}
                        className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          isActive(item.href, item.section)
                            ? "text-white bg-primary/20"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 pt-4 border-t border-white/10"
                >
                  <a
                    href="https://wa.me/6285280452688"
                    target="_blank"
                    className="block w-full text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    {t("nav.contact")} →
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

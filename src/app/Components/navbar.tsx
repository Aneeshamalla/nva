"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import nvaImg from "@/assets/nva-logo.png";

const navLinks = [
  { label: "Achievements", href: "/achievements" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
];

// Animation timing (ms)
const LOGO_DELAY = 100;
const TEXT_DELAY = 1000;
const LINKS_START = 450;
const LINK_STAGGER = 110;
const CTA_DELAY = LINKS_START + navLinks.length * LINK_STAGGER;

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [showNav, setShowNav] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  const logoSlotRef = useRef<HTMLSpanElement>(null);
  const [logoShift, setLogoShift] = useState(0);

  useEffect(() => {
    if (!isHome) {
      setShowNav(true);
      return;
    }

    const intro = document.getElementById("home");
    if (!intro) return;

    const observer = new IntersectionObserver(([entry]) => {
      setShowNav(!entry.isIntersecting);
    });

    observer.observe(intro);
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    const measure = () => {
      const el = logoSlotRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setLogoShift(window.innerWidth / 2 - (rect.left + rect.width / 2));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const delay = (ms: number) => ({
    transitionDelay: showNav ? `${ms}ms` : "0ms",
  });

  const reveal = showNav
    ? "opacity-100 translate-y-0"
    : "opacity-0 -translate-y-3";

  return (
    <>
      <header
        inert={!showNav}
        className={`fixed inset-x-0 top-0 z-50 bg-white shadow-lg transition-transform duration-300 ease-out motion-reduce:transition-none ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 sm:px-8 lg:h-22">
          <Link href="/" className="flex items-center gap-2 text-black">
            <span ref={logoSlotRef} className="inline-flex shrink-0">
              <span
                className="inline-flex motion-reduce:transition-none"
                style={{
                  transitionProperty: "transform, opacity",
                  transitionDuration: "1100ms, 600ms",
                  transitionTimingFunction:
                    "cubic-bezier(0.65, 0, 0.35, 1), ease-out",
                  transitionDelay: showNav ? `${LOGO_DELAY}ms` : "0ms",
                  transform: showNav
                    ? "translate(0, 0) scale(1)"
                    : `translate(${logoShift}px, -40px) scale(1.6)`,
                  opacity: showNav ? 1 : 0,
                }}
              >
                <Image
                  src={nvaImg}
                  alt="Nepal Volleyball Association"
                  className="h-10 w-auto rounded-full bg-white p-0.5 lg:h-16"
                />
              </span>
            </span>

            <span
              style={delay(TEXT_DELAY)}
              className={`text-sm font-bold uppercase leading-tight tracking-wide transition-all duration-500 ease-out motion-reduce:transition-none ${
                showNav ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
              }`}
            >
              Nepal Volleyball
              <br />
              Association
            </span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map(({ label, href }, i) => {
              const active = pathname === href;
              return (
                <li
                  key={href}
                  style={delay(LINKS_START + i * LINK_STAGGER)}
                  className={`transition-all duration-500 ease-out motion-reduce:transition-none ${reveal}`}
                >
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                      active
                        ? "text-[#DE1D3E]"
                        : "text-gray-700 hover:text-[#064898]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Get in Touch */}
          <div
            style={delay(CTA_DELAY)}
            className={`hidden transition-all duration-500 ease-out motion-reduce:transition-none lg:block ${reveal}`}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#DE1D3E] px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c01833] hover:shadow-lg hover:shadow-red-900/30"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            className="flex size-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-[#064898] transition-colors hover:bg-gray-50 sm:size-12 lg:hidden"
          >
            <Menu className="size-6" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        inert={!menuOpen}
        className={`fixed inset-0 z-60 lg:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          aria-hidden
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute inset-y-0 right-0 flex w-[85%] max-w-sm flex-col rounded-l-2xl bg-white shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
            <span className="text-lg font-bold text-[#064898]">Menu</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="-mr-2 rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-[#064898]"
            >
              <X className="size-6" />
            </button>
          </div>

          <ul className="flex-1 space-y-1 overflow-y-auto px-4 py-5">
            {[{ label: "Home", href: "/" }, ...navLinks].map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3.5 text-base font-semibold transition-colors ${
                      active
                        ? "bg-[#064898]/8 text-[#064898]"
                        : "text-gray-800 hover:bg-gray-50 hover:text-[#064898]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="px-4 pb-6">
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center rounded-xl bg-[#DE1D3E] py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#c01833]"
            >
              Get In Touch
            </Link>
          </div>
        </aside>
      </div>

      {!isHome && <div aria-hidden className="h-18 lg:h-22" />}
    </>
  );
}
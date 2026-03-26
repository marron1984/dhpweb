"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const CORPORATE_URL = "https://www.dhp-dev.jp";

const navigation = [
  { name: "Stories", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-warm-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="inline-flex items-center justify-center w-[30px] h-[30px] bg-brand-red text-white text-[9px] font-bold tracking-tight leading-none transition-transform duration-300 group-hover:scale-95">
              dhp
            </span>
            <div className="flex flex-col">
              <span className="text-[13px] font-medium tracking-[0.02em] leading-tight text-foreground">
                Project Stories
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[12px] tracking-[0.15em] uppercase text-muted hover:text-foreground transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <span className="w-px h-3 bg-border" />
            <a
              href={CORPORATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] tracking-[0.15em] uppercase text-muted/60 hover:text-muted transition-colors duration-300 flex items-center gap-1.5"
            >
              Corporate
              <svg className="w-2.5 h-2.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニューを開く"
            aria-expanded={isOpen}
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span
                className={`block h-[1px] bg-foreground transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-[3px]" : ""
                }`}
              />
              <span
                className={`block h-[1px] bg-foreground transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-[3px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 pb-8 pt-4 bg-warm-white">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-3 text-[13px] tracking-[0.1em] uppercase text-muted hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a
            href={CORPORATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 text-[13px] tracking-[0.1em] uppercase text-muted/60"
            onClick={() => setIsOpen(false)}
          >
            Corporate Site ↗
          </a>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Project Stories", href: "/projects" },
  { name: "Business", href: "/business" },
  { name: "About", href: "/about" },
  { name: "Group", href: "/group" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 bg-brand-red text-white text-xs font-bold rounded-sm">
              dhp
            </span>
            <span className="text-sm lg:text-base font-semibold tracking-tight">
              株式会社dhp都市開発
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm tracking-wide text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニューを開く"
            aria-expanded={isOpen}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[3.5px]" : ""
                }`}
              />
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 pb-8 pt-2 bg-dark border-t border-white/10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-3 text-base text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

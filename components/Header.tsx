"use client";

import Link from "next/link";
import { useState } from "react";

const CORPORATE_URL = "https://www.dhp-dev.jp";

const navigation = [
  { name: "Stories", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Corporate Site", href: CORPORATE_URL, external: true },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-brand-red text-white text-[10px] font-bold rounded-sm leading-none">
              dhp
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight leading-tight">
                Project Stories
              </span>
              <span className="text-[10px] text-gray-500 tracking-wide leading-tight">
                dhp Urban Development
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) =>
              "external" in item && item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-wide text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1"
                >
                  {item.name}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs tracking-wide text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </Link>
              )
            )}
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
          {navigation.map((item) =>
            "external" in item && item.external ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 text-base text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-base text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}

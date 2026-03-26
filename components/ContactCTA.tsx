"use client";

import Link from "next/link";
import { ScrollReveal, TextReveal } from "@/components/motion";
import type { Dictionary } from "@/lib/i18n";

interface ContactCTAProps {
  variant?: "light" | "dark";
  dict: Dictionary;
}

export default function ContactCTA({ variant = "dark", dict }: ContactCTAProps) {
  const isDark = variant === "dark";

  return (
    <section className={`py-20 lg:py-28 ${isDark ? "bg-dark text-white" : "bg-cream text-foreground"}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 text-center">
        <ScrollReveal><span className="label-editorial text-brand-red">{dict.cta.label}</span></ScrollReveal>
        <TextReveal as="h2" className="mt-6 font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-[1.4] tracking-[0.02em]" delay={0.1}>
          {dict.cta.title}
        </TextReveal>
        <ScrollReveal delay={0.3}>
          <p className={`mt-6 text-[14px] leading-[2] max-w-lg mx-auto ${isDark ? "text-white/40" : "text-muted"}`}>{dict.cta.body}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <div className="mt-12">
            <Link href="/contact" className={`group inline-flex items-center gap-4 text-[13px] tracking-[0.1em] uppercase transition-colors duration-500 ${isDark ? "text-white/60 hover:text-white" : "text-foreground hover:text-brand-red"}`}>
              <span className={`w-12 h-px group-hover:w-20 transition-all duration-500 ${isDark ? "bg-white/30 group-hover:bg-white" : "bg-brand-red/30 group-hover:bg-brand-red"}`} />
              {dict.cta.button}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

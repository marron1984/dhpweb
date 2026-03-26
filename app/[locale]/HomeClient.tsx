"use client";

import Link from "next/link";
import Image from "next/image";
import { getFeaturedProjects, getAllProjects, getAllCategories } from "@/lib/projects";
import ProjectStoryCard from "@/components/ProjectStoryCard";
import ContactCTA from "@/components/ContactCTA";
import {
  ScrollReveal,
  TextReveal,
  StaggerChildren,
  StaggerItem,
  ImageReveal,
  LineReveal,
} from "@/components/motion";
import type { Locale, Dictionary } from "@/lib/i18n";

const CORPORATE_URL = "https://www.dhp-dev.jp";

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export default function HomeClient({ locale, dict }: Props) {
  const featuredProjects = getFeaturedProjects();
  const allProjects = getAllProjects();
  const otherProjects = allProjects.filter((p) => !p.featured);
  const categories = getAllCategories();
  const prefix = `/${locale}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-warm-white pt-28 lg:pt-36 pb-20 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <ScrollReveal delay={0.1}>
                <p className="label-editorial text-brand-red mb-10">{dict.hero.label}</p>
              </ScrollReveal>
              <TextReveal as="h1" className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.2] tracking-[0.02em]" delay={0.2}>
                {dict.hero.title}
              </TextReveal>
              <ScrollReveal delay={0.5}>
                <div className="mt-10 max-w-md">
                  <p className="text-[14px] text-muted leading-[2.2]">{dict.hero.body}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.7}>
                <div className="mt-12">
                  <Link href={`${prefix}/projects`} className="group inline-flex items-center gap-4 text-[13px] tracking-[0.1em] uppercase text-foreground hover:text-brand-red transition-colors duration-500">
                    <span className="w-12 h-px bg-brand-red group-hover:w-20 transition-all duration-500" />
                    {dict.hero.cta}
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <div className="order-1 lg:order-2">
              <ImageReveal direction="left" delay={0.3}>
                <div className="aspect-[3/4] lg:aspect-[4/5] bg-cream overflow-hidden relative">
                  <Image src="/images/project-1.png" alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
                </div>
              </ImageReveal>
              <ScrollReveal delay={0.8} direction="none">
                <div className="relative -mt-3 -mr-3 lg:-mt-6 lg:-mr-6 w-full h-6 border-r border-b border-brand-red/15" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section className="py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl">
            <ScrollReveal><span className="label-editorial text-brand-red">{dict.concept.label}</span></ScrollReveal>
            <TextReveal as="h2" className="mt-6 font-serif text-[clamp(1.5rem,3.5vw,3rem)] font-light leading-[1.5] tracking-[0.02em]" delay={0.1}>
              {dict.concept.title}
            </TextReveal>
          </div>
          <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 lg:col-start-8">
              <ScrollReveal delay={0.2}><p className="text-[14px] text-muted leading-[2.2]">{dict.concept.body1}</p></ScrollReveal>
              <ScrollReveal delay={0.3}><p className="mt-6 text-[14px] text-muted leading-[2.2]">{dict.concept.body2}</p></ScrollReveal>
              <LineReveal className="mt-8 h-px w-16 bg-brand-red" delay={0.5} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-12 lg:mb-16">
            <div>
              <ScrollReveal><span className="label-editorial text-brand-red">{dict.featured.label}</span></ScrollReveal>
              <ScrollReveal delay={0.1}><h2 className="mt-4 font-serif text-2xl lg:text-[2.2rem] font-light tracking-[0.02em]">{dict.featured.title}</h2></ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} direction="right">
              <Link href={`${prefix}/projects`} className="hidden lg:inline-flex items-center gap-3 text-[12px] tracking-[0.1em] uppercase text-muted hover:text-brand-red transition-colors duration-300">
                <span>{dict.featured.viewAll}</span><span className="w-8 h-px bg-current" />
              </Link>
            </ScrollReveal>
          </div>
          <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.15}>
            {featuredProjects.map((project, i) => (
              <StaggerItem key={project.slug}><ProjectStoryCard project={project} variant="featured" index={i} locale={locale} /></StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* More */}
      {otherProjects.length > 0 && (
        <section className="py-20 lg:py-28 px-6 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <ScrollReveal><span className="label-editorial text-brand-red">{dict.more.label}</span></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="mt-4 font-serif text-2xl lg:text-[2.2rem] font-light tracking-[0.02em] mb-12 lg:mb-16">{dict.more.title}</h2></ScrollReveal>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.12}>
              {otherProjects.map((project, i) => (
                <StaggerItem key={project.slug}><ProjectStoryCard project={project} index={i} locale={locale} /></StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal><span className="label-editorial text-brand-red">{dict.categories.label}</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className="mt-4 font-serif text-2xl lg:text-[2.2rem] font-light tracking-[0.02em] mb-12 lg:mb-16">{dict.categories.title}</h2></ScrollReveal>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-0" staggerDelay={0.06}>
            {categories.map((cat, i) => {
              const count = allProjects.filter((p) => p.category === cat).length;
              return (
                <StaggerItem key={cat}>
                  <Link href={`${prefix}/projects?category=${encodeURIComponent(cat)}`} className="group flex items-center justify-between py-6 border-b border-border hover:border-brand-red/30 transition-colors duration-500 px-1">
                    <div className="flex items-center gap-4">
                      <span className="text-[11px] text-muted/40 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-[15px] font-light tracking-[0.02em] group-hover:text-brand-red transition-colors duration-300">{cat}</span>
                    </div>
                    <span className="text-[11px] text-muted/40 group-hover:text-brand-red transition-colors duration-300">{count}</span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* About */}
      <section className="py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal><span className="label-editorial text-muted/40">{dict.about.label}</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className="mt-4 font-serif text-xl lg:text-2xl font-light tracking-[0.02em] mb-6">{dict.about.title}</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className="text-[14px] text-muted leading-[2.2] mb-10">{dict.about.body}</p></ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a href={CORPORATE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[12px] tracking-[0.1em] uppercase text-muted hover:text-brand-red transition-colors duration-300">
              <span>{dict.about.corporateLink}</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      <ContactCTA dict={dict} />
    </>
  );
}

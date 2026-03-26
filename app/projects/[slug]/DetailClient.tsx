"use client";

import Link from "next/link";
import { ProjectStory } from "@/lib/types";
import StorySection from "@/components/StorySection";
import StatsBlock from "@/components/StatsBlock";
import ProjectStoryCard from "@/components/ProjectStoryCard";
import ContactCTA from "@/components/ContactCTA";
import {
  ScrollReveal,
  TextReveal,
  ParallaxImage,
  StaggerChildren,
  StaggerItem,
  LineReveal,
} from "@/components/motion";

interface DetailClientProps {
  project: ProjectStory;
  relatedProjects: ProjectStory[];
}

export default function DetailClient({ project, relatedProjects }: DetailClientProps) {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="pt-32 lg:pt-44 pb-16 lg:pb-24 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 text-[11px] tracking-[0.15em] uppercase text-muted/50 hover:text-brand-red transition-colors duration-300 mb-12"
            >
              <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
              Stories
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <span className="label-editorial text-brand-red">
                {project.category}
              </span>
              <span className="w-4 h-px bg-border" />
              <span className="text-[11px] text-muted/50">{project.location}</span>
              <span className="w-4 h-px bg-border" />
              <span className="text-[11px] text-muted/50 tabular-nums">{project.year}</span>
            </div>
          </ScrollReveal>

          <TextReveal
            as="h1"
            className="font-serif text-[clamp(2rem,5vw,4rem)] font-light tracking-[0.02em] leading-[1.25] max-w-4xl"
            delay={0.15}
          >
            {project.title}
          </TextReveal>

          <ScrollReveal delay={0.4}>
            <p className="mt-6 text-[15px] text-muted/70 font-light max-w-2xl leading-[1.8]">
              {project.subtitle}
            </p>
          </ScrollReveal>

          <LineReveal className="mt-8 h-px w-20 bg-brand-red" delay={0.5} />

          {/* Hero Image with Parallax */}
          <div className="mt-16">
            <ParallaxImage
              src={project.heroImage}
              alt={project.title}
              className="aspect-[21/9] bg-cream"
              speed={0.1}
              priority
            />
          </div>
        </div>
      </section>

      {/* ─── Content ─── */}
      <section className="px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Project Meta */}
          <StaggerChildren className="py-10 border-t border-b border-border grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.08}>
            {[
              { label: "Location", value: project.location },
              { label: "Category", value: project.category },
              { label: "Year", value: String(project.year) },
              { label: "Tags", value: project.relatedTags.join(", ") },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <p className="label-editorial text-muted/40 mb-2">{item.label}</p>
                <p className="text-[14px] text-foreground/80">{item.value}</p>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Overview */}
          <div className="py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
              <div className="lg:col-span-4">
                <ScrollReveal>
                  <span className="label-editorial text-brand-red">Overview</span>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <h2 className="mt-3 font-serif text-xl lg:text-2xl font-light tracking-[0.02em]">
                    プロジェクト概要
                  </h2>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-8">
                <ScrollReveal delay={0.15}>
                  <p className="text-[14px] lg:text-[15px] text-muted leading-[2.2]">
                    {project.summary}
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <ScrollReveal>
              <StatsBlock metrics={project.metrics} />
            </ScrollReveal>
          )}

          {/* Story Sections */}
          <ScrollReveal>
            <StorySection number="01" label="Background" title="課題">
              {project.challenge}
            </StorySection>
          </ScrollReveal>

          <ScrollReveal>
            <StorySection number="02" label="Strategy" title="戦略">
              {project.strategy}
            </StorySection>
          </ScrollReveal>

          <ScrollReveal>
            <StorySection number="03" label="Execution" title="実行">
              {project.execution}
            </StorySection>
          </ScrollReveal>

          <ScrollReveal>
            <StorySection number="04" label="Result" title="成果">
              {project.result}
            </StorySection>
          </ScrollReveal>

          <ScrollReveal>
            <StorySection number="05" label="Future" title="今後の展開">
              {project.future}
            </StorySection>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Related ─── */}
      {relatedProjects.length > 0 && (
        <section className="py-20 lg:py-28 px-6 lg:px-16 bg-cream mt-20">
          <div className="max-w-[1400px] mx-auto">
            <ScrollReveal>
              <span className="label-editorial text-brand-red">Related</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 font-serif text-2xl lg:text-[2.2rem] font-light tracking-[0.02em] mb-12 lg:mb-16">
                関連するストーリー
              </h2>
            </ScrollReveal>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.15}>
              {relatedProjects.map((rp, i) => (
                <StaggerItem key={rp.slug}>
                  <ProjectStoryCard project={rp} index={i} />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  );
}

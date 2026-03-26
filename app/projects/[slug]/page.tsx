import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllProjects, getProjectBySlug, getRelatedProjects } from "@/lib/projects";
import StorySection from "@/components/StorySection";
import StatsBlock from "@/components/StatsBlock";
import ProjectStoryCard from "@/components/ProjectStoryCard";
import ContactCTA from "@/components/ContactCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(
    project.slug,
    project.relatedTags
  );

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#333] to-[#1a1a1a]" />
        <div className="absolute inset-0 bg-dark/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 w-full">
          <Link
            href="/projects"
            className="inline-block text-xs tracking-wide text-gray-400 hover:text-white transition-colors duration-300 mb-8"
          >
            &larr; Project Stories
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] tracking-wider text-brand-red font-medium">
              {project.category}
            </span>
            <span className="text-[11px] text-gray-500">|</span>
            <span className="text-[11px] text-gray-400">
              {project.location}
            </span>
            <span className="text-[11px] text-gray-500">|</span>
            <span className="text-[11px] text-gray-400">{project.year}</span>
          </div>
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-base lg:text-lg text-gray-400 font-light max-w-2xl">
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Meta Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-gray-200">
            <div>
              <p className="text-xs tracking-wide text-gray-400 uppercase mb-1">
                所在地
              </p>
              <p className="text-sm">{project.location}</p>
            </div>
            <div>
              <p className="text-xs tracking-wide text-gray-400 uppercase mb-1">
                カテゴリ
              </p>
              <p className="text-sm">{project.category}</p>
            </div>
            <div>
              <p className="text-xs tracking-wide text-gray-400 uppercase mb-1">
                年度
              </p>
              <p className="text-sm">{project.year}</p>
            </div>
            <div>
              <p className="text-xs tracking-wide text-gray-400 uppercase mb-1">
                タグ
              </p>
              <div className="flex flex-wrap gap-1">
                {project.relatedTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-brand-red bg-red-50 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="text-xs tracking-[0.2em] uppercase text-brand-red mb-2">
                  Overview
                </p>
                <h2 className="text-xl lg:text-2xl font-light tracking-tight">
                  プロジェクト概要
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-sm lg:text-base text-gray-600 leading-[2.2]">
                  {project.summary}
                </p>
              </div>
            </div>
          </div>

          {/* Metrics */}
          {project.metrics && <StatsBlock metrics={project.metrics} />}

          {/* Story Sections */}
          <StorySection number="01" label="Background" title="課題">
            {project.challenge}
          </StorySection>

          <StorySection number="02" label="Strategy" title="戦略">
            {project.strategy}
          </StorySection>

          <StorySection number="03" label="Execution" title="実行">
            {project.execution}
          </StorySection>

          <StorySection number="04" label="Result" title="成果">
            {project.result}
          </StorySection>

          <StorySection number="05" label="Future" title="今後の展開">
            {project.future}
          </StorySection>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-24 lg:py-32 px-6 lg:px-12 bg-light-gray">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs tracking-[0.2em] uppercase text-brand-red mb-3">
              Related Stories
            </p>
            <h2 className="text-2xl lg:text-3xl font-light tracking-tight mb-12">
              関連するストーリー
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {relatedProjects.map((rp) => (
                <ProjectStoryCard key={rp.slug} project={rp} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}

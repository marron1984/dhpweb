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
      {/* ─── Hero ─── */}
      <section className="pt-32 lg:pt-44 pb-16 lg:pb-24 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-[11px] tracking-[0.15em] uppercase text-muted/50 hover:text-brand-red transition-colors duration-300 mb-12"
          >
            <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
            Stories
          </Link>

          {/* Meta line */}
          <div className="flex items-center gap-3 mb-6">
            <span className="label-editorial text-brand-red">
              {project.category}
            </span>
            <span className="w-4 h-px bg-border" />
            <span className="text-[11px] text-muted/50">{project.location}</span>
            <span className="w-4 h-px bg-border" />
            <span className="text-[11px] text-muted/50 tabular-nums">{project.year}</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light tracking-[0.02em] leading-[1.25] max-w-4xl">
            {project.title}
          </h1>
          <p className="mt-6 text-[15px] text-muted/70 font-light max-w-2xl leading-[1.8]">
            {project.subtitle}
          </p>

          {/* Hero Image */}
          <div className="mt-16 aspect-[21/9] bg-cream relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cream to-[#ece9e5]" />
          </div>
        </div>
      </section>

      {/* ─── Content ─── */}
      <section className="px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Project Meta */}
          <div className="py-10 border-t border-b border-border grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Location", value: project.location },
              { label: "Category", value: project.category },
              { label: "Year", value: String(project.year) },
              {
                label: "Tags",
                value: project.relatedTags.join(", "),
              },
            ].map((item) => (
              <div key={item.label}>
                <p className="label-editorial text-muted/40 mb-2">{item.label}</p>
                <p className="text-[14px] text-foreground/80">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
              <div className="lg:col-span-4">
                <span className="label-editorial text-brand-red">Overview</span>
                <h2 className="mt-3 font-serif text-xl lg:text-2xl font-light tracking-[0.02em]">
                  プロジェクト概要
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-[14px] lg:text-[15px] text-muted leading-[2.2]">
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

      {/* ─── Related ─── */}
      {relatedProjects.length > 0 && (
        <section className="py-32 lg:py-44 px-6 lg:px-16 bg-cream mt-20">
          <div className="max-w-[1400px] mx-auto">
            <span className="label-editorial text-brand-red">Related</span>
            <h2 className="mt-4 font-serif text-2xl lg:text-[2.2rem] font-light tracking-[0.02em] mb-16 lg:mb-24">
              関連するストーリー
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedProjects.map((rp, i) => (
                <ProjectStoryCard key={rp.slug} project={rp} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  );
}

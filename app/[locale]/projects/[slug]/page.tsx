import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProjects, getProjectBySlug, getRelatedProjects } from "@/lib/projects";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import DetailClient from "./DetailClient";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.flatMap((p) => [
    { locale: "ja", slug: p.slug },
    { locale: "en", slug: p.slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const dict = await getDictionary(locale as Locale);
  const relatedProjects = getRelatedProjects(project.slug, project.relatedTags);

  return <DetailClient project={project} relatedProjects={relatedProjects} locale={locale as Locale} dict={dict} />;
}

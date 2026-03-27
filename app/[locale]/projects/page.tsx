import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { getAllProjects, getAllCategories, preloadLocaleData } from "@/lib/projects";
import ProjectsClient from "./ProjectsClient";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  await preloadLocaleData(locale as Locale);
  const dict = await getDictionary(locale as Locale);
  const allProjects = getAllProjects(locale as Locale);
  const categories = getAllCategories(locale as Locale);

  return <ProjectsClient locale={locale as Locale} dict={dict} allProjects={allProjects} categories={categories} />;
}

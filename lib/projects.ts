import { ProjectStory, ProjectCategory } from "./types";
import { projects } from "@/data/projects";
import type { Locale } from "@/lib/i18n";

let projectsEn: ProjectStory[] | null = null;

async function loadEnProjects(): Promise<ProjectStory[]> {
  if (!projectsEn) {
    const mod = await import("@/data/projects-en");
    projectsEn = mod.projectsEn;
  }
  return projectsEn!;
}

function getProjectsSync(locale?: Locale): ProjectStory[] {
  if (locale === "en" && projectsEn) return projectsEn;
  return projects;
}

export function getAllProjects(locale?: Locale): ProjectStory[] {
  return getProjectsSync(locale);
}

export function getFeaturedProjects(locale?: Locale): ProjectStory[] {
  return getProjectsSync(locale).filter((p) => p.featured);
}

export function getProjectBySlug(slug: string, locale?: Locale): ProjectStory | undefined {
  return getProjectsSync(locale).find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory, locale?: Locale): ProjectStory[] {
  return getProjectsSync(locale).filter((p) => p.category === category);
}

export function getRelatedProjects(
  currentSlug: string,
  tags: string[],
  limit = 3,
  locale?: Locale
): ProjectStory[] {
  return getProjectsSync(locale)
    .filter(
      (p) =>
        p.slug !== currentSlug &&
        p.relatedTags.some((t) => tags.includes(t))
    )
    .slice(0, limit);
}

export function getAllCategories(locale?: Locale): ProjectCategory[] {
  if (locale === "en") {
    return [
      "ホテル・リゾート",
      "都市開発",
      "商業・飲食",
      "再生・リノベーション",
      "コンサルティング",
      "投資・流動化",
    ];
  }
  return [
    "ホテル・リゾート",
    "都市開発",
    "商業・飲食",
    "再生・リノベーション",
    "コンサルティング",
    "投資・流動化",
  ];
}

// Preload English data
export async function preloadLocaleData(locale: Locale): Promise<void> {
  if (locale === "en") {
    await loadEnProjects();
  }
}

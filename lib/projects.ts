import { ProjectStory, ProjectCategory } from "./types";
import { projects } from "@/data/projects";

export function getAllProjects(): ProjectStory[] {
  return projects;
}

export function getFeaturedProjects(): ProjectStory[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): ProjectStory | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): ProjectStory[] {
  return projects.filter((p) => p.category === category);
}

export function getRelatedProjects(
  currentSlug: string,
  tags: string[],
  limit = 3
): ProjectStory[] {
  return projects
    .filter(
      (p) =>
        p.slug !== currentSlug &&
        p.relatedTags.some((t) => tags.includes(t))
    )
    .slice(0, limit);
}

export function getAllCategories(): ProjectCategory[] {
  return [
    "ホテル・リゾート",
    "都市開発",
    "商業・飲食",
    "再生・リノベーション",
    "コンサルティング",
    "投資・流動化",
  ];
}

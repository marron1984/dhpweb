import fs from "fs";
import path from "path";
import { ProjectStory } from "@/lib/types";

const DATA_DIR = path.join(process.cwd(), "data");
const PROJECTS_FILE = path.join(DATA_DIR, "projects.json");

function ensureDataFile(): void {
  if (!fs.existsSync(PROJECTS_FILE)) {
    // On first run, the JSON file doesn't exist yet.
    // The TS data is the source of truth until the JSON is created via admin.
    // We'll import it at build time via the init script.
  }
}

export function getAllProjectsFromDB(): ProjectStory[] {
  ensureDataFile();
  if (fs.existsSync(PROJECTS_FILE)) {
    const raw = fs.readFileSync(PROJECTS_FILE, "utf-8");
    return JSON.parse(raw);
  }
  // Fallback: read from TS module (works during build)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { projects } = require("@/data/projects");
  return projects;
}

export function getProjectFromDB(slug: string): ProjectStory | undefined {
  return getAllProjectsFromDB().find((p) => p.slug === slug);
}

export function saveAllProjects(projects: ProjectStory[]): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 2), "utf-8");
}

export function createProject(project: ProjectStory): void {
  const projects = getAllProjectsFromDB();
  if (projects.find((p) => p.slug === project.slug)) {
    throw new Error(`Slug「${project.slug}」は既に使用されています`);
  }
  projects.unshift(project);
  saveAllProjects(projects);
}

export function updateProject(slug: string, data: Partial<ProjectStory>): ProjectStory {
  const projects = getAllProjectsFromDB();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) {
    throw new Error(`プロジェクト「${slug}」が見つかりません`);
  }
  projects[index] = { ...projects[index], ...data };
  saveAllProjects(projects);
  return projects[index];
}

export function deleteProject(slug: string): void {
  const projects = getAllProjectsFromDB();
  const filtered = projects.filter((p) => p.slug !== slug);
  if (filtered.length === projects.length) {
    throw new Error(`プロジェクト「${slug}」が見つかりません`);
  }
  saveAllProjects(filtered);
}

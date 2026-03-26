export type ProjectCategory =
  | "ホテル・リゾート"
  | "都市開発"
  | "商業・飲食"
  | "再生・リノベーション"
  | "コンサルティング"
  | "投資・流動化";

export interface ProjectStory {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  location: string;
  year: number;
  thumbnail: string;
  heroImage: string;
  summary: string;
  challenge: string;
  strategy: string;
  execution: string;
  result: string;
  future: string;
  relatedTags: string[];
  featured?: boolean;
  metrics?: ProjectMetric[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface BusinessArea {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  relatedProjectSlugs: string[];
}

export interface GroupCompany {
  name: string;
  description: string;
  url?: string;
}

import Link from "next/link";
import { ProjectStory } from "@/lib/types";

interface ProjectStoryCardProps {
  project: ProjectStory;
  variant?: "default" | "featured";
}

export default function ProjectStoryCard({
  project,
  variant = "default",
}: ProjectStoryCardProps) {
  const isFeatured = variant === "featured";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
    >
      <article>
        {/* Thumbnail */}
        <div
          className={`relative overflow-hidden bg-gray-100 ${
            isFeatured ? "aspect-[16/10]" : "aspect-[3/2]"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
          <div className="absolute inset-0 bg-dark/5 group-hover:bg-dark/0 transition-all duration-700" />
          {/* Placeholder for image */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-300">
            <svg
              className={`${isFeatured ? "w-16 h-16" : "w-12 h-12"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.5}
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="mt-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[11px] tracking-wider text-brand-red font-medium">
              {project.category}
            </span>
            <span className="text-[11px] text-gray-300">|</span>
            <span className="text-[11px] text-gray-400">{project.location}</span>
          </div>
          <h3
            className={`font-light tracking-tight group-hover:text-brand-red transition-colors duration-300 ${
              isFeatured ? "text-xl lg:text-2xl" : "text-lg"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-gray-500 font-light">
            {project.subtitle}
          </p>
          {isFeatured && (
            <p className="mt-3 text-sm text-gray-400 leading-relaxed line-clamp-2">
              {project.summary}
            </p>
          )}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-xs tracking-wide text-gray-400 group-hover:text-brand-red transition-colors duration-300">
              Read Story
            </span>
            <span className="text-gray-300 group-hover:text-brand-red group-hover:translate-x-1 transition-all duration-300">
              &rarr;
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

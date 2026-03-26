"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectStory } from "@/lib/types";

interface ProjectStoryCardProps {
  project: ProjectStory;
  variant?: "default" | "featured";
  index?: number;
}

export default function ProjectStoryCard({
  project,
  variant = "default",
  index = 0,
}: ProjectStoryCardProps) {
  const isFeatured = variant === "featured";

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article>
        {/* Image */}
        <motion.div
          className={`relative overflow-hidden bg-cream ${
            isFeatured ? "aspect-[4/5]" : "aspect-[3/4]"
          }`}
          whileHover="hover"
        >
          <motion.div
            className="absolute inset-0"
            variants={{
              hover: { scale: 1.05 },
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-dark/0"
            variants={{ hover: { backgroundColor: "rgba(28,28,28,0.08)" } }}
            transition={{ duration: 0.5 }}
          />
          {/* Index */}
          <div className="absolute top-5 left-5">
            <span className="text-[11px] text-white/70 tabular-nums drop-shadow-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          {/* Category */}
          <div className="absolute bottom-5 left-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/80 bg-white/85 backdrop-blur-sm px-3 py-1.5">
              {project.category}
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] text-muted/60">{project.location}</span>
            <span className="w-3 h-px bg-border" />
            <span className="text-[11px] text-muted/60 tabular-nums">{project.year}</span>
          </div>
          <h3
            className={`font-serif font-light tracking-[0.02em] group-hover:text-brand-red transition-colors duration-500 ${
              isFeatured
                ? "text-[1.25rem] lg:text-[1.4rem] leading-[1.4]"
                : "text-[1.1rem] lg:text-[1.2rem] leading-[1.4]"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-[13px] text-muted/70 leading-relaxed">
            {project.subtitle}
          </p>
          {isFeatured && (
            <p className="mt-3 text-[13px] text-muted/50 leading-[1.9] line-clamp-2">
              {project.summary}
            </p>
          )}
          {/* Read indicator with motion */}
          <div className="mt-5 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <motion.span
              className="h-px bg-brand-red"
              initial={{ width: 0 }}
              whileInView={{ width: 24 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
            <span className="text-[11px] tracking-[0.15em] uppercase text-brand-red">
              Read
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

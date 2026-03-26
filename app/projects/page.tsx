"use client";

import { useState } from "react";
import { getAllProjects, getAllCategories } from "@/lib/projects";
import { ProjectCategory } from "@/lib/types";
import ProjectStoryCard from "@/components/ProjectStoryCard";
import PageHeader from "@/components/PageHeader";
import FilterBar from "@/components/FilterBar";
import ContactCTA from "@/components/ContactCTA";

export default function ProjectsPage() {
  const allProjects = getAllProjects();
  const categories = getAllCategories();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | null>(
    null
  );

  const filteredProjects = activeCategory
    ? allProjects.filter((p) => p.category === activeCategory)
    : allProjects;

  return (
    <>
      <PageHeader
        label="Project Stories"
        title="プロジェクトストーリー"
        subtitle="企画背景・課題・戦略・実行・成果。一つひとつのプロジェクトが持つ価値創造のプロセスを、物語としてお伝えします。"
      />

      <section className="pb-32 lg:pb-44 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <FilterBar
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, i) => (
              <ProjectStoryCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-32 text-center">
              <p className="text-[14px] text-muted/50">
                該当するプロジェクトがありません。
              </p>
            </div>
          )}
        </div>
      </section>

      <ContactCTA variant="light" />
    </>
  );
}

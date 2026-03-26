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

      <section className="pb-24 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <FilterBar
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredProjects.map((project) => (
              <ProjectStoryCard key={project.slug} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-sm text-gray-400">
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

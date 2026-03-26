"use client";

import { ProjectCategory } from "@/lib/types";

interface FilterBarProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory | null;
  onSelect: (category: ProjectCategory | null) => void;
}

export default function FilterBar({
  categories,
  activeCategory,
  onSelect,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 lg:gap-3 mb-12 lg:mb-16">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 text-xs tracking-wide border transition-all duration-300 ${
          activeCategory === null
            ? "bg-navy text-white border-navy"
            : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-400"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 text-xs tracking-wide border transition-all duration-300 ${
            activeCategory === cat
              ? "bg-navy text-white border-navy"
              : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-400"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

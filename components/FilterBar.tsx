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
            ? "bg-brand-red text-white border-brand-red"
            : "bg-transparent text-gray-500 border-gray-200 hover:border-brand-red hover:text-brand-red"
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
              ? "bg-brand-red text-white border-brand-red"
              : "bg-transparent text-gray-500 border-gray-200 hover:border-brand-red hover:text-brand-red"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

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
    <div className="flex flex-wrap gap-3 mb-16 lg:mb-24">
      <button
        onClick={() => onSelect(null)}
        className={`px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase transition-all duration-300 ${
          activeCategory === null
            ? "bg-foreground text-white"
            : "bg-transparent text-muted/60 hover:text-foreground border border-border hover:border-foreground/20"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase transition-all duration-300 ${
            activeCategory === cat
              ? "bg-foreground text-white"
              : "bg-transparent text-muted/60 hover:text-foreground border border-border hover:border-foreground/20"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

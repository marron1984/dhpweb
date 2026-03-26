"use client";

import { ProjectMetric } from "@/lib/types";
import { StaggerChildren, StaggerItem } from "@/components/motion";

interface StatsBlockProps {
  metrics: ProjectMetric[];
}

export default function StatsBlock({ metrics }: StatsBlockProps) {
  return (
    <div className="py-16 lg:py-20 border-t border-b border-border">
      <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12" staggerDelay={0.1}>
        {metrics.map((metric) => (
          <StaggerItem key={metric.label}>
            <p className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-light tracking-[0.02em] text-brand-red">
              {metric.value}
            </p>
            <p className="mt-2 label-editorial text-muted/50">
              {metric.label}
            </p>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}

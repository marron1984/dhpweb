import { ProjectMetric } from "@/lib/types";

interface StatsBlockProps {
  metrics: ProjectMetric[];
}

export default function StatsBlock({ metrics }: StatsBlockProps) {
  return (
    <div className="py-16 lg:py-20 border-t border-b border-border">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <p className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-light tracking-[0.02em] text-brand-red">
              {metric.value}
            </p>
            <p className="mt-2 label-editorial text-muted/50">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

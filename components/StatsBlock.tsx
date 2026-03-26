import { ProjectMetric } from "@/lib/types";

interface StatsBlockProps {
  metrics: ProjectMetric[];
}

export default function StatsBlock({ metrics }: StatsBlockProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 py-12 lg:py-16 border-y border-gray-200">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <p className="text-2xl lg:text-3xl font-light tracking-tight text-navy">
            {metric.value}
          </p>
          <p className="mt-1 text-xs tracking-wide text-gray-400 uppercase">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}

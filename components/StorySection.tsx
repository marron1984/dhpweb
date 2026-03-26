interface StorySectionProps {
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
}

export default function StorySection({
  number,
  label,
  title,
  children,
}: StorySectionProps) {
  return (
    <section className="py-20 lg:py-28 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
        {/* Left */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[11px] text-muted/30 tabular-nums">{number}</span>
            <span className="w-8 h-px bg-border" />
            <span className="label-editorial text-muted/50">{label}</span>
          </div>
          <h3 className="font-serif text-xl lg:text-2xl font-light tracking-[0.02em]">
            {title}
          </h3>
        </div>
        {/* Right */}
        <div className="lg:col-span-8">
          <div className="text-[14px] lg:text-[15px] text-muted leading-[2.2]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

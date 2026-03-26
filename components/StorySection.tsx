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
    <section className="py-16 lg:py-20 border-b border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* Left: Label */}
        <div className="lg:col-span-4">
          <span className="text-xs tracking-[0.2em] text-gray-300 block mb-2">
            {number}
          </span>
          <p className="text-xs tracking-[0.15em] uppercase text-gray-400 mb-2">
            {label}
          </p>
          <h3 className="text-xl lg:text-2xl font-light tracking-tight">
            {title}
          </h3>
        </div>
        {/* Right: Content */}
        <div className="lg:col-span-8">
          <div className="text-sm lg:text-base text-gray-600 leading-[2] lg:leading-[2.2]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

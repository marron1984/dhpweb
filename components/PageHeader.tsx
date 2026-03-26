interface PageHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export default function PageHeader({ title, subtitle, label }: PageHeaderProps) {
  return (
    <section className="pt-32 lg:pt-40 pb-16 lg:pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
      {label && (
        <p className="text-xs tracking-[0.2em] uppercase text-brand-red mb-4">
          {label}
        </p>
      )}
      <h1 className="text-3xl lg:text-5xl font-light tracking-tight">{title}</h1>
      {subtitle && (
        <p className="mt-4 text-base lg:text-lg text-gray-500 font-light max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-8 h-px w-16 bg-brand-red" />
    </section>
  );
}

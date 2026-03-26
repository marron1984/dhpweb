interface PageHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export default function PageHeader({ title, subtitle, label }: PageHeaderProps) {
  return (
    <section className="pt-32 lg:pt-44 pb-20 lg:pb-28 px-6 lg:px-16 max-w-[1400px] mx-auto">
      {label && (
        <p className="label-editorial text-brand-red mb-6">{label}</p>
      )}
      <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.02em] leading-[1.3]">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-6 text-[14px] text-muted leading-[2.2] max-w-xl">
          {subtitle}
        </p>
      )}
    </section>
  );
}

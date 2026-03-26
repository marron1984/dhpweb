interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-16 lg:mb-24 ${isCenter ? "text-center" : ""}`}>
      {label && (
        <p className="label-editorial text-brand-red mb-4">{label}</p>
      )}
      <h2 className="font-serif text-2xl lg:text-[2.2rem] font-light tracking-[0.02em]">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[14px] text-muted leading-[2] max-w-xl ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

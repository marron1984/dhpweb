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
    <div className={`mb-12 lg:mb-16 ${isCenter ? "text-center" : ""}`}>
      {label && (
        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">
          {label}
        </p>
      )}
      <h2 className="text-2xl lg:text-3xl font-light tracking-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm text-gray-500 leading-relaxed max-w-2xl ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

import Link from "next/link";

interface ContactCTAProps {
  variant?: "light" | "dark";
}

export default function ContactCTA({ variant = "dark" }: ContactCTAProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-24 lg:py-32 ${
        isDark ? "bg-dark text-white" : "bg-light-gray text-foreground"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <p
          className={`text-[11px] tracking-[0.2em] uppercase mb-6 ${
            isDark ? "text-brand-red" : "text-brand-red"
          }`}
        >
          Contact
        </p>
        <h2 className="text-2xl lg:text-4xl font-light leading-relaxed mb-6">
          あなたのプロジェクトも、
          <br className="lg:hidden" />
          ストーリーに。
        </h2>
        <p
          className={`text-sm leading-relaxed max-w-xl mx-auto mb-10 ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          不動産開発、投資、再生、コンサルティングなど、
          <br className="hidden lg:block" />
          次のプロジェクトのご相談を承っています。
        </p>
        <Link
          href="/contact"
          className={`inline-block text-sm tracking-wide px-10 py-4 transition-all duration-300 ${
            isDark
              ? "bg-brand-red border border-brand-red text-white hover:bg-transparent"
              : "border border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
          }`}
        >
          お問い合わせ
        </Link>
      </div>
    </section>
  );
}

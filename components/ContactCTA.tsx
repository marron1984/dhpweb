import Link from "next/link";

interface ContactCTAProps {
  variant?: "light" | "dark";
}

export default function ContactCTA({ variant = "dark" }: ContactCTAProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-32 lg:py-44 ${
        isDark ? "bg-dark text-white" : "bg-cream text-foreground"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 text-center">
        <span className={`label-editorial ${isDark ? "text-brand-red" : "text-brand-red"}`}>
          Contact
        </span>
        <h2 className="mt-6 font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-[1.4] tracking-[0.02em]">
          あなたのプロジェクトも、<br />
          ストーリーに。
        </h2>
        <p
          className={`mt-6 text-[14px] leading-[2] max-w-lg mx-auto ${
            isDark ? "text-white/40" : "text-muted"
          }`}
        >
          不動産開発、投資、再生、コンサルティング。
          次のプロジェクトのご相談を承っています。
        </p>
        <div className="mt-12">
          <Link
            href="/contact"
            className={`group inline-flex items-center gap-4 text-[13px] tracking-[0.1em] uppercase transition-colors duration-500 ${
              isDark
                ? "text-white/60 hover:text-white"
                : "text-foreground hover:text-brand-red"
            }`}
          >
            <span className={`w-12 h-px group-hover:w-20 transition-all duration-500 ${
              isDark ? "bg-white/30 group-hover:bg-white" : "bg-brand-red/30 group-hover:bg-brand-red"
            }`} />
            お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  );
}

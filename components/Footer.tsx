import Link from "next/link";

const CORPORATE_URL = "https://www.dhp-dev.jp";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Main */}
        <div className="py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-[30px] h-[30px] bg-brand-red text-white text-[9px] font-bold tracking-tight leading-none">
                dhp
              </span>
              <span className="text-[13px] font-medium tracking-[0.02em] text-white">
                Project Stories
              </span>
            </Link>
            <p className="mt-8 text-[13px] text-white/40 leading-[2] max-w-xs">
              不動産の企画・開発・再生における
              価値創造のプロセスを、
              ストーリーとしてお届けするブランドメディア。
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-12">
            {/* Site */}
            <div>
              <p className="label-editorial text-white/30 mb-6">Site</p>
              <ul className="space-y-4">
                {[
                  { name: "Top", href: "/" },
                  { name: "Project Stories", href: "/projects" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Corporate */}
            <div>
              <p className="label-editorial text-white/30 mb-6">Corporate</p>
              <ul className="space-y-4">
                {["会社概要", "事業内容", "業務実績", "グループ企業"].map((name) => (
                  <li key={name}>
                    <a
                      href={CORPORATE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-white/50 hover:text-white transition-colors duration-300 inline-flex items-center gap-1"
                    >
                      {name}
                      <span className="text-[9px] opacity-40">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-[12px] text-white/30 leading-relaxed">
                  株式会社dhp都市開発
                </p>
                <p className="mt-1 text-[12px] text-white/20">
                  TEL 06-6253-8262
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/5">
          <p className="text-[11px] text-white/20">
            &copy; {new Date().getFullYear()} dhp Urban Development co.,ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}

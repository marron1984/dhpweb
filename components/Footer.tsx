import Link from "next/link";

const CORPORATE_URL = "https://www.dhp-dev.jp";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-brand-red text-white text-[10px] font-bold rounded-sm leading-none">
                dhp
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight leading-tight">
                  Project Stories
                </span>
                <span className="text-[10px] text-gray-500 tracking-wide leading-tight">
                  dhp Urban Development
                </span>
              </div>
            </Link>
            <p className="mt-6 text-xs text-gray-500 leading-relaxed max-w-sm">
              株式会社dhp都市開発が手がけるプロジェクトの企画背景・課題・戦略・実行・成果を、
              ストーリーとしてお届けするブランドメディアです。
            </p>
          </div>

          {/* Site Navigation */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-semibold tracking-widest uppercase text-gray-600 mb-4">
              This Site
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Top
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Project Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Links */}
          <div className="lg:col-span-4">
            <h3 className="text-[10px] font-semibold tracking-widest uppercase text-gray-600 mb-4">
              Corporate
            </h3>
            <ul className="space-y-3">
              {[
                { name: "会社概要", path: "" },
                { name: "事業内容", path: "" },
                { name: "業務実績", path: "" },
                { name: "グループ企業", path: "" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={CORPORATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-1.5"
                  >
                    {item.name}
                    <svg className="w-2.5 h-2.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-xs text-gray-600 leading-relaxed">
                株式会社dhp都市開発
              </p>
              <div className="mt-2 flex flex-col gap-1">
                <span className="text-xs text-gray-500">TEL 06-6253-8262</span>
                <span className="text-xs text-gray-500">FAX 06-6253-8263</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} 株式会社dhp都市開発 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

const footerNavigation = {
  main: [
    { name: "Top", href: "/" },
    { name: "About", href: "/about" },
    { name: "Business", href: "/business" },
    { name: "Project Stories", href: "/projects" },
    { name: "Group", href: "/group" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-brand-red text-white text-xs font-bold rounded-sm">
                dhp
              </span>
              <span className="text-sm font-semibold tracking-tight">
                株式会社dhp都市開発
              </span>
            </Link>
            <p className="mt-4 text-xs text-gray-500 leading-relaxed">
              dhp Urban Development co.,ltd.
            </p>
            <p className="mt-2 text-xs text-gray-500 leading-relaxed">
              〒541-0058
              <br />
              大阪市中央区南久宝寺町4丁目5番12号
              <br />
              アップウェル心斎橋 2F
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-3">
              {footerNavigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                06-6253-8262
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18.75 6.634a48.08 48.08 0 00-1.913-.247" />
                </svg>
                06-6253-8263
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

import Link from "next/link";

const footerNavigation = {
  main: [
    { name: "Project Stories", href: "/projects" },
    { name: "Business", href: "/business" },
    { name: "About", href: "/about" },
    { name: "Group", href: "/group" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              dhp<span className="font-light">都市開発</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-md">
              不動産の企画・開発・再生を通じて、
              <br />
              まちと建築に新たな価値を創造します。
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerNavigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
              Contact
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              株式会社dhp都市開発
              <br />
              東京都港区
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 text-sm text-white border border-white/30 px-6 py-2.5 hover:bg-white hover:text-navy transition-all duration-300"
            >
              お問い合わせ
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} DHP Urban Development Co., Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

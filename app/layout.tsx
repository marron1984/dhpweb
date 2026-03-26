import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "dhp都市開発 | 価値創造のプロセスを、物語として。",
    template: "%s | dhp都市開発",
  },
  description:
    "株式会社dhp都市開発は、不動産の企画・開発・再生を通じて、まちと建築に新たな価値を創造します。ホテル・リゾート、都市開発、アセットマネジメントなど、多彩なプロジェクトストーリーをご覧ください。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "dhp都市開発",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

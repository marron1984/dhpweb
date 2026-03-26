import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Project Stories | dhp都市開発",
    template: "%s | Project Stories - dhp都市開発",
  },
  description:
    "株式会社dhp都市開発のProject Stories。不動産の企画・開発・再生における価値創造のプロセスを、一つひとつのストーリーとしてお届けします。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "dhp都市開発 Project Stories",
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

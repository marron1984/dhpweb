import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | dhp都市開発 CMS",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f8f8f7]">
      {children}
    </div>
  );
}

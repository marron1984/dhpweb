import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "dhp都市開発へのお問い合わせ。不動産開発、投資、再生、コンサルティングなど、お気軽にご相談ください。",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="お問い合わせ"
        subtitle="不動産開発、投資、再生、コンサルティングなど、あらゆるフェーズでのご相談を承っています。まずはお気軽にお問い合わせください。"
      />

      <section className="pb-24 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Info */}
            <div className="lg:col-span-4">
              <div className="mb-10">
                <p className="text-xs tracking-[0.15em] uppercase text-gray-400 mb-3">
                  ご相談カテゴリ
                </p>
                <ul className="space-y-2">
                  {[
                    "不動産開発に関するご相談",
                    "投資・出資に関するご相談",
                    "事業提携のご提案",
                    "プロジェクトマネジメント委託",
                    "コンサルティング依頼",
                    "その他のお問い合わせ",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-500 flex items-start gap-2"
                    >
                      <span className="text-gray-300 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-gray-400 mb-3">
                  株式会社dhp都市開発
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  東京都港区
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

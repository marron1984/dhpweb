import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

const CORPORATE_URL = "https://www.dhp-dev.jp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "dhp都市開発へのお問い合わせ。不動産開発、投資、再生、コンサルティングなど、プロジェクトに関するご相談を承っています。",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="お問い合わせ"
        subtitle="プロジェクトに関するご相談、投資・提携のご提案など、お気軽にお問い合わせください。"
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
                    "プロジェクトに関するご相談",
                    "投資・出資に関するご相談",
                    "事業提携のご提案",
                    "コンサルティング依頼",
                    "その他のお問い合わせ",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-500 flex items-start gap-2"
                    >
                      <span className="text-brand-red mt-1 text-[8px]">&#9632;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10">
                <p className="text-xs tracking-[0.15em] uppercase text-gray-400 mb-3">
                  株式会社dhp都市開発
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  〒541-0058
                  <br />
                  大阪市中央区南久宝寺町4丁目5番12号
                  <br />
                  アップウェル心斎橋 2F
                </p>
                <div className="mt-3 flex flex-col gap-1">
                  <span className="text-sm text-gray-500">TEL 06-6253-8262</span>
                  <span className="text-sm text-gray-500">FAX 06-6253-8263</span>
                </div>
              </div>

              <div>
                <a
                  href={CORPORATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-brand-red hover:text-[#6b1a26] transition-colors duration-300"
                >
                  コーポレートサイト
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
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

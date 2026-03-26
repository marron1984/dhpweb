import type { Metadata } from "next";
import { groupCompanies } from "@/data/group";
import PageHeader from "@/components/PageHeader";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Group",
  description: "dhp都市開発グループの関連会社・事業紹介。",
};

export default function GroupPage() {
  return (
    <>
      <PageHeader
        label="Group"
        title="グループ企業"
        subtitle="dhp都市開発グループは、開発・運営・管理を一体としたバリューチェーンを構築しています。それぞれの専門性を活かしながら、プロジェクトの成功を総合的に支えます。"
      />

      <section className="pb-24 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Parent Company */}
          <div className="mb-16 lg:mb-20">
            <div className="bg-navy text-white p-8 lg:p-12">
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">
                Core Company
              </p>
              <h2 className="text-xl lg:text-2xl font-light tracking-tight">
                株式会社dhp都市開発
              </h2>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-2xl">
                グループの中核企業として、不動産の企画・開発・再生を担います。
                ホテル＆リゾートプロデュース、不動産開発・流動化、
                アセットマネジメント、コンサルティングなど、
                不動産の価値創造に関わるあらゆる領域をカバーしています。
              </p>
            </div>
          </div>

          {/* Group Companies */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-200">
            {groupCompanies.map((company) => (
              <div key={company.name} className="bg-white p-8 lg:p-10">
                <h3 className="text-base lg:text-lg font-light tracking-tight">
                  {company.name}
                </h3>
                <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                  {company.description}
                </p>
                {company.url && (
                  <span className="inline-block mt-6 text-xs text-gray-400">
                    詳細 &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Group Structure Diagram Placeholder */}
          <div className="mt-16 lg:mt-24 bg-gray-50 p-8 lg:p-12 text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">
              Group Structure
            </p>
            <div className="py-16">
              <div className="inline-block bg-navy text-white px-8 py-4 text-sm">
                dhp都市開発
              </div>
              <div className="w-px h-8 bg-gray-300 mx-auto" />
              <div className="flex justify-center gap-4 flex-wrap">
                {groupCompanies.map((company) => (
                  <div
                    key={company.name}
                    className="border border-gray-200 bg-white px-6 py-3 text-xs text-gray-600"
                  >
                    {company.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA variant="light" />
    </>
  );
}

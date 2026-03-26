import type { Metadata } from "next";
import Link from "next/link";
import { businessAreas } from "@/data/business";
import { getProjectBySlug } from "@/lib/projects";
import PageHeader from "@/components/PageHeader";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Business",
  description:
    "dhp都市開発の事業領域。ホテル＆リゾート開発、不動産流動化、アセットマネジメント、コンサルティングなど。",
};

export default function BusinessPage() {
  return (
    <>
      <PageHeader
        label="Business"
        title="事業領域"
        subtitle="不動産の価値創造に関わるあらゆる領域で、専門性の高いサービスを提供しています。各事業は独立した専門性を持ちながら、プロジェクトストーリーを通じてつながっています。"
      />

      <section className="pb-24 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {businessAreas.map((area, index) => {
            const relatedProjects = area.relatedProjectSlugs
              .map(getProjectBySlug)
              .filter(Boolean);

            return (
              <article
                key={area.slug}
                className={`py-16 lg:py-20 ${
                  index < businessAreas.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  {/* Left */}
                  <div className="lg:col-span-4">
                    <span className="text-xs tracking-[0.2em] text-brand-red block mb-2">
                      Business {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl lg:text-2xl font-light tracking-tight">
                      {area.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">{area.subtitle}</p>
                  </div>

                  {/* Right */}
                  <div className="lg:col-span-8">
                    <p className="text-sm lg:text-base text-gray-600 leading-[2.2]">
                      {area.description}
                    </p>

                    {/* Capabilities */}
                    <div className="mt-8">
                      <p className="text-xs tracking-[0.15em] uppercase text-gray-400 mb-4">
                        提供サービス
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {area.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="text-sm text-gray-500 flex items-start gap-2"
                          >
                            <span className="text-brand-red mt-1 text-[8px]">&#9632;</span>
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Related Projects */}
                    {relatedProjects.length > 0 && (
                      <div className="mt-8 pt-8 border-t border-gray-100">
                        <p className="text-xs tracking-[0.15em] uppercase text-gray-400 mb-4">
                          関連プロジェクト
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {relatedProjects.map(
                            (project) =>
                              project && (
                                <Link
                                  key={project.slug}
                                  href={`/projects/${project.slug}`}
                                  className="text-sm text-gray-500 border border-gray-200 px-4 py-2 hover:border-brand-red hover:text-brand-red transition-all duration-300"
                                >
                                  {project.title}
                                </Link>
                              )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <ContactCTA variant="light" />
    </>
  );
}

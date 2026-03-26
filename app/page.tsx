import Link from "next/link";
import { getFeaturedProjects, getAllProjects, getAllCategories } from "@/lib/projects";
import ProjectStoryCard from "@/components/ProjectStoryCard";
import ContactCTA from "@/components/ContactCTA";

const CORPORATE_URL = "https://www.dhp-dev.jp";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const allProjects = getAllProjects();
  const otherProjects = allProjects.filter((p) => !p.featured);
  const categories = getAllCategories();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-dark to-[#333]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.3em] uppercase text-brand-red mb-8 animate-fade-in-up">
              dhp Urban Development — Project Stories
            </p>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-light leading-[1.15] tracking-tight animate-fade-in-up">
              価値創造の
              <br />
              プロセスを、
              <br />
              物語として。
            </h1>
            <p className="mt-8 text-base lg:text-lg text-gray-400 font-light leading-relaxed max-w-xl animate-fade-in-up-delay">
              ホテル開発、都市再生、収益不動産の再構築——
              <br className="hidden lg:block" />
              一つひとつのプロジェクトには、課題があり、戦略があり、
              <br className="hidden lg:block" />
              実行と成果の物語がある。
            </p>
            <div className="mt-12 flex items-center gap-8 animate-fade-in-up-delay-2">
              <Link
                href="/projects"
                className="inline-block text-sm tracking-wide bg-brand-red border border-brand-red px-8 py-3.5 text-white hover:bg-transparent transition-all duration-300"
              >
                ストーリーを読む
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-gray-500" />
        </div>
      </section>

      {/* Concept */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-[11px] tracking-[0.2em] uppercase text-brand-red mb-4">
                What We Tell
              </p>
              <h2 className="text-2xl lg:text-4xl font-light leading-relaxed tracking-tight">
                実績ではなく、
                <br />
                ストーリーを。
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-center">
              <div>
                <p className="text-sm lg:text-base text-gray-600 leading-[2.2]">
                  dhp都市開発が手がけるプロジェクトは、一つとして同じものがありません。
                  土地の文脈、エリアの課題、関わる人々の想い——
                  それらを読み解き、企画し、実行してきたプロセスそのものに、
                  私たちの価値があると考えています。
                </p>
                <p className="mt-6 text-sm lg:text-base text-gray-600 leading-[2.2]">
                  このサイトでは、それぞれのプロジェクトが持つ
                  背景・課題・戦略・実行・成果を「ストーリー」として公開しています。
                  数字だけでは伝わらない、価値創造のリアルを、ぜひご覧ください。
                </p>
                <div className="mt-8 h-px w-16 bg-brand-red" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Stories */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-light-gray">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-brand-red mb-3">
            Featured
          </p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-tight mb-12 lg:mb-16">
            注目のストーリー
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredProjects.map((project) => (
              <ProjectStoryCard
                key={project.slug}
                project={project}
                variant="featured"
              />
            ))}
          </div>
        </div>
      </section>

      {/* More Stories */}
      {otherProjects.length > 0 && (
        <section className="py-24 lg:py-32 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] tracking-[0.2em] uppercase text-brand-red mb-3">
              More Stories
            </p>
            <h2 className="text-2xl lg:text-3xl font-light tracking-tight mb-12 lg:mb-16">
              その他のストーリー
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {otherProjects.map((project) => (
                <ProjectStoryCard key={project.slug} project={project} />
              ))}
            </div>

            <div className="mt-12 lg:mt-16 text-center">
              <Link
                href="/projects"
                className="inline-block text-sm tracking-wide border border-brand-red text-brand-red px-8 py-3.5 hover:bg-brand-red hover:text-white transition-all duration-300"
              >
                すべてのストーリーを見る
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-light-gray">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-brand-red mb-3">
            Categories
          </p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-tight mb-12 lg:mb-16">
            カテゴリから探す
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-200">
            {categories.map((cat) => {
              const count = allProjects.filter((p) => p.category === cat).length;
              return (
                <Link
                  key={cat}
                  href={`/projects?category=${encodeURIComponent(cat)}`}
                  className="group bg-white p-6 lg:p-8 hover:bg-white/80 transition-colors duration-300"
                >
                  <p className="text-sm lg:text-base font-light tracking-tight group-hover:text-brand-red transition-colors duration-300">
                    {cat}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    {count} {count === 1 ? "story" : "stories"}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About dhp — light section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-brand-red mb-4">
            About
          </p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-tight mb-6">
            dhp都市開発について
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto mb-8">
            「ホテル＆リゾートプロデュース開発事業」「不動産開発・流動化事業」
            「アセットマネジメント／プロジェクトマネジメント業務」
            「不動産コンサルティング／プロジェクトアレンジング業務」の
            4つの事業を通じて、不動産の価値創造に取り組んでいます。
          </p>
          <a
            href={CORPORATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-brand-red hover:text-[#6b1a26] transition-colors duration-300"
          >
            コーポレートサイトを見る
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}

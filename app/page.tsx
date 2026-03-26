import Link from "next/link";
import { getFeaturedProjects, getAllProjects } from "@/lib/projects";
import ProjectStoryCard from "@/components/ProjectStoryCard";
import SectionHeader from "@/components/SectionHeader";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const totalProjects = getAllProjects().length;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0d1a2e] to-[#1a2744]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-8 animate-fade-in-up">
              DHP Urban Development
            </p>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-light leading-[1.15] tracking-tight animate-fade-in-up">
              価値創造の
              <br />
              プロセスを、
              <br />
              物語として。
            </h1>
            <p className="mt-8 text-base lg:text-lg text-gray-400 font-light leading-relaxed max-w-xl animate-fade-in-up-delay">
              不動産の企画・開発・再生を通じて、まちと建築に新たな価値を創造する。
              その一つひとつのプロジェクトが持つストーリーを、ここに。
            </p>
            <div className="mt-12 flex items-center gap-8 animate-fade-in-up-delay-2">
              <Link
                href="/projects"
                className="inline-block text-sm tracking-wide border border-white/30 px-8 py-3.5 hover:bg-white hover:text-navy transition-all duration-300"
              >
                Project Stories
              </Link>
              <Link
                href="/about"
                className="text-sm tracking-wide text-gray-400 hover:text-white transition-colors duration-300"
              >
                About Us &rarr;
              </Link>
            </div>
          </div>

          {/* Hero Metrics */}
          <div className="mt-24 lg:mt-32 grid grid-cols-3 gap-8 max-w-lg">
            <div>
              <p className="text-3xl lg:text-4xl font-light">{totalProjects}+</p>
              <p className="text-xs text-gray-500 mt-1 tracking-wide">
                Projects
              </p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-light">4</p>
              <p className="text-xs text-gray-500 mt-1 tracking-wide">
                Business Areas
              </p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-light">20+</p>
              <p className="text-xs text-gray-500 mt-1 tracking-wide">
                Years
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-gray-500" />
        </div>
      </section>

      {/* Intro / Concept Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">
                Our Philosophy
              </p>
              <h2 className="text-2xl lg:text-4xl font-light leading-relaxed tracking-tight">
                不動産を、
                <br />
                売るのではなく、
                <br />
                価値を創る。
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-center">
              <div>
                <p className="text-sm lg:text-base text-gray-600 leading-[2.2]">
                  dhp都市開発は、不動産を「モノ」としてではなく「コト」として捉えます。
                  一つひとつの物件が持つ背景、そのエリアの文脈、そこに関わる人々の想い。
                  それらを丁寧に読み解き、企画・開発・再生のプロセスを通じて、
                  新たな価値として社会に還元していく。
                </p>
                <p className="mt-6 text-sm lg:text-base text-gray-600 leading-[2.2]">
                  私たちの実績は、数字だけでは語れません。
                  だからこそ、Project Storyとして、
                  その一つひとつのプロセスをお伝えしています。
                </p>
                <div className="mt-8 h-px w-16 bg-navy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Stories */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Featured Stories"
            title="注目のプロジェクトストーリー"
            description="企画背景から成果まで、価値創造のプロセスを物語として。"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredProjects.map((project) => (
              <ProjectStoryCard
                key={project.slug}
                project={project}
                variant="featured"
              />
            ))}
          </div>
          <div className="mt-12 lg:mt-16 text-center">
            <Link
              href="/projects"
              className="inline-block text-sm tracking-wide border border-navy text-navy px-8 py-3.5 hover:bg-navy hover:text-white transition-all duration-300"
            >
              すべてのストーリーを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Business Overview */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Business"
            title="事業領域"
            description="不動産の価値創造に関わるあらゆる領域で、専門性の高いサービスを提供しています。"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
            {[
              {
                title: "ホテル＆リゾートプロデュース開発事業",
                desc: "土地と文化を読み解き、唯一無二の滞在体験を創る",
              },
              {
                title: "不動産開発・流動化事業",
                desc: "不動産の潜在価値を見出し、流動性を生み出す",
              },
              {
                title: "アセットマネジメント / PM業務",
                desc: "投資のライフサイクル全体に寄り添う",
              },
              {
                title: "不動産コンサルティング / アレンジング",
                desc: "複雑な案件を、最適な形に導く",
              },
            ].map((biz) => (
              <Link
                key={biz.title}
                href="/business"
                className="group bg-white p-8 lg:p-12 hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-base lg:text-lg font-light tracking-tight group-hover:text-navy transition-colors duration-300">
                  {biz.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{biz.desc}</p>
                <span className="mt-6 inline-block text-xs text-gray-300 group-hover:text-navy transition-colors duration-300">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Group Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">
                Group
              </p>
              <h2 className="text-2xl lg:text-3xl font-light tracking-tight">
                グループ企業
              </h2>
              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                dhp都市開発グループは、開発・運営・管理を一体とした
                バリューチェーンを構築しています。
              </p>
              <Link
                href="/group"
                className="inline-block mt-8 text-sm tracking-wide text-navy hover:text-gray-600 transition-colors duration-300"
              >
                グループ詳細 &rarr;
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4">
                {["100DOORS & RESORTS", "dhpアセットマネジメント", "dhpプロパティマネジメント"].map(
                  (name) => (
                    <div
                      key={name}
                      className="bg-white p-6 lg:p-8 border border-gray-100"
                    >
                      <h3 className="text-base font-light tracking-tight">
                        {name}
                      </h3>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}

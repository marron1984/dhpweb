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
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-end lg:items-center overflow-hidden bg-warm-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-32 lg:py-0 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Copy */}
            <div className="order-2 lg:order-1">
              <p className="label-editorial text-brand-red mb-10 animate-fade-in-up">
                dhp Urban Development
              </p>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.2] tracking-[0.02em] animate-fade-in-up">
                価値創造の<br />
                プロセスを、<br />
                物語として。
              </h1>
              <div className="mt-10 max-w-md animate-fade-in-up-delay">
                <p className="text-[14px] text-muted leading-[2.2]">
                  ホテル開発、都市再生、収益不動産の再構築——一つひとつのプロジェクトには、
                  課題があり、戦略があり、実行と成果の物語がある。
                </p>
              </div>
              <div className="mt-12 animate-fade-in-up-delay-2">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-4 text-[13px] tracking-[0.1em] uppercase text-foreground hover:text-brand-red transition-colors duration-500"
                >
                  <span className="w-12 h-px bg-brand-red group-hover:w-20 transition-all duration-500" />
                  ストーリーを読む
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="order-1 lg:order-2 animate-fade-in">
              <div className="relative">
                <div className="aspect-[3/4] lg:aspect-[4/5] bg-cream overflow-hidden">
                  <div className="absolute inset-0 flex items-end p-8">
                    <p className="font-serif text-[11px] text-muted/30 tracking-[0.3em] uppercase">
                      Project Stories
                    </p>
                  </div>
                </div>
                {/* Decorative frame */}
                <div className="absolute -bottom-3 -right-3 lg:-bottom-6 lg:-right-6 w-full h-full border border-brand-red/15 -z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-6 lg:left-16 hidden lg:flex items-center gap-3">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-muted/30" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted/40 rotate-90 origin-left translate-x-2">
            Scroll
          </span>
        </div>
      </section>

      {/* ─── Concept ─── */}
      <section className="py-32 lg:py-44 px-6 lg:px-16 relative">
        <div className="max-w-[1400px] mx-auto">
          {/* Large quote-style heading */}
          <div className="max-w-4xl">
            <span className="label-editorial text-brand-red">Philosophy</span>
            <h2 className="mt-6 font-serif text-[clamp(1.5rem,3.5vw,3rem)] font-light leading-[1.5] tracking-[0.02em]">
              実績を並べるのではなく、<br />
              <span className="text-brand-red">物語</span>を伝える。<br />
              それが、私たちの選んだ方法です。
            </h2>
          </div>
          <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-[14px] text-muted leading-[2.2]">
                dhp都市開発が手がけるプロジェクトは、一つとして同じものがありません。
                土地の文脈、エリアの課題、関わる人々の想い——
                それらを読み解き、企画し、実行してきたプロセスそのものに、
                私たちの価値があると考えています。
              </p>
              <p className="mt-6 text-[14px] text-muted leading-[2.2]">
                数字だけでは伝わらない、価値創造のリアルを。
                背景・課題・戦略・実行・成果——
                このサイトで、すべてをお伝えします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Stories ─── */}
      <section className="py-32 lg:py-44 px-6 lg:px-16 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-16 lg:mb-24">
            <div>
              <span className="label-editorial text-brand-red">Featured</span>
              <h2 className="mt-4 font-serif text-2xl lg:text-[2.2rem] font-light tracking-[0.02em]">
                注目のストーリー
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden lg:inline-flex items-center gap-3 text-[12px] tracking-[0.1em] uppercase text-muted hover:text-brand-red transition-colors duration-300"
            >
              <span>View All</span>
              <span className="w-8 h-px bg-current" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, i) => (
              <ProjectStoryCard
                key={project.slug}
                project={project}
                variant="featured"
                index={i}
              />
            ))}
          </div>

          <div className="mt-12 lg:hidden text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 text-[12px] tracking-[0.1em] uppercase text-muted hover:text-brand-red transition-colors duration-300"
            >
              <span>View All</span>
              <span className="w-8 h-px bg-current" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── More Stories ─── */}
      {otherProjects.length > 0 && (
        <section className="py-32 lg:py-44 px-6 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <span className="label-editorial text-brand-red">More</span>
            <h2 className="mt-4 font-serif text-2xl lg:text-[2.2rem] font-light tracking-[0.02em] mb-16 lg:mb-24">
              その他のストーリー
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {otherProjects.map((project, i) => (
                <ProjectStoryCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Categories ─── */}
      <section className="py-32 lg:py-44 px-6 lg:px-16 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <span className="label-editorial text-brand-red">Categories</span>
          <h2 className="mt-4 font-serif text-2xl lg:text-[2.2rem] font-light tracking-[0.02em] mb-16 lg:mb-24">
            カテゴリから探す
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-0">
            {categories.map((cat, i) => {
              const count = allProjects.filter((p) => p.category === cat).length;
              return (
                <Link
                  key={cat}
                  href={`/projects?category=${encodeURIComponent(cat)}`}
                  className="group flex items-center justify-between py-6 border-b border-border hover:border-brand-red/30 transition-colors duration-500 px-1"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] text-muted/40 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] font-light tracking-[0.02em] group-hover:text-brand-red transition-colors duration-300">
                      {cat}
                    </span>
                  </div>
                  <span className="text-[11px] text-muted/40 group-hover:text-brand-red transition-colors duration-300">
                    {count}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── About (minimal) ─── */}
      <section className="py-32 lg:py-44 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <span className="label-editorial text-muted/40">About</span>
            <h2 className="mt-4 font-serif text-xl lg:text-2xl font-light tracking-[0.02em] mb-6">
              dhp都市開発について
            </h2>
            <p className="text-[14px] text-muted leading-[2.2] mb-10">
              「ホテル＆リゾートプロデュース開発事業」「不動産開発・流動化事業」
              「アセットマネジメント／プロジェクトマネジメント業務」
              「不動産コンサルティング／プロジェクトアレンジング業務」——
              4つの事業領域を通じて、不動産の価値創造に取り組んでいます。
            </p>
            <a
              href={CORPORATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[12px] tracking-[0.1em] uppercase text-muted hover:text-brand-red transition-colors duration-300"
            >
              <span>Corporate Site</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <ContactCTA />
    </>
  );
}

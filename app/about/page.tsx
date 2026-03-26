import type { Metadata } from "next";
import Link from "next/link";
import { companyInfo } from "@/data/group";
import PageHeader from "@/components/PageHeader";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "dhp都市開発について。不動産を価値創造のメディアと捉え、企画・開発・再生を通じて社会に新たな価値を提供します。",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="私たちについて"
        subtitle="不動産を「売る」のではなく、「価値を創る」。それが、dhp都市開発の原点です。"
      />

      {/* Philosophy */}
      <section className="pb-24 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs tracking-[0.2em] uppercase text-brand-red mb-4">
                Philosophy
              </p>
              <h2 className="text-2xl lg:text-3xl font-light tracking-tight leading-relaxed">
                不動産は、
                <br />
                価値創造の
                <br />
                メディアである。
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm lg:text-base text-gray-600 leading-[2.2]">
                私たちは、不動産を単なる資産や投資対象としてではなく、
                人々の暮らし、まちの文化、社会の価値観を映し出す「メディア」と捉えています。
              </p>
              <p className="mt-6 text-sm lg:text-base text-gray-600 leading-[2.2]">
                一つの建物、一つの土地には、そこに至るまでの歴史があり、
                そこから生まれる可能性があります。
                私たちの役割は、その潜在的な価値を読み解き、
                企画・開発・再生のプロセスを通じて、
                新たな物語として社会に届けることです。
              </p>
              <p className="mt-6 text-sm lg:text-base text-gray-600 leading-[2.2]">
                ホテル・リゾートの開発、収益不動産の再構築、
                アセットマネジメント、コンサルティング。
                事業領域は多岐にわたりますが、その根底にあるのは常に同じ思想です。
                「不動産を通じて、まだ世の中にない価値を創る」。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-light-gray">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-brand-red mb-4">
            Our Approach
          </p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-tight mb-12 lg:mb-16">
            dhp都市開発のスタンス
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {[
              {
                num: "01",
                title: "文脈を読む",
                desc: "物件のスペックだけでなく、その土地の歴史、エリアの文化、利用者の生活動線まで。あらゆる文脈を丁寧に読み解くことから、プロジェクトは始まります。",
              },
              {
                num: "02",
                title: "物語を編む",
                desc: "読み解いた文脈を、建築・空間・体験として再構成する。私たちの企画は、「なぜこの場所に、この建物が必要か」という問いに対する回答です。",
              },
              {
                num: "03",
                title: "価値を届ける",
                desc: "投資家、利用者、地域社会。あらゆるステークホルダーにとっての価値を最大化する。それが、不動産の本来あるべき姿だと考えています。",
              },
            ].map((item) => (
              <div key={item.num} className="bg-white p-8 lg:p-12">
                <span className="text-xs tracking-[0.2em] text-brand-red">
                  {item.num}
                </span>
                <h3 className="mt-4 text-lg font-light tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-brand-red mb-4">
            Company
          </p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-tight mb-12 lg:mb-16">
            会社概要
          </h2>

          <div className="max-w-2xl">
            <dl className="divide-y divide-gray-100">
              <div className="py-5 grid grid-cols-3 gap-4">
                <dt className="text-sm text-gray-400">会社名</dt>
                <dd className="col-span-2 text-sm">
                  {companyInfo.name}
                  <br />
                  <span className="text-gray-400 text-xs">{companyInfo.nameEn}</span>
                </dd>
              </div>
              <div className="py-5 grid grid-cols-3 gap-4">
                <dt className="text-sm text-gray-400">設立</dt>
                <dd className="col-span-2 text-sm">{companyInfo.established}</dd>
              </div>
              <div className="py-5 grid grid-cols-3 gap-4">
                <dt className="text-sm text-gray-400">資本金</dt>
                <dd className="col-span-2 text-sm">{companyInfo.capital}</dd>
              </div>
              <div className="py-5 grid grid-cols-3 gap-4">
                <dt className="text-sm text-gray-400">代表取締役</dt>
                <dd className="col-span-2 text-sm">{companyInfo.ceo}</dd>
              </div>
              <div className="py-5 grid grid-cols-3 gap-4">
                <dt className="text-sm text-gray-400">所在地</dt>
                <dd className="col-span-2 text-sm">{companyInfo.address}</dd>
              </div>
              <div className="py-5 grid grid-cols-3 gap-4">
                <dt className="text-sm text-gray-400">事業内容</dt>
                <dd className="col-span-2 text-sm">
                  <ul className="space-y-1">
                    {companyInfo.business.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-brand-red mt-1 text-[8px]">&#9632;</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-16">
            <Link
              href="/projects"
              className="text-sm tracking-wide text-brand-red hover:text-[#6b1a26] transition-colors duration-300"
            >
              プロジェクトストーリーを見る &rarr;
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

import type { Metadata } from "next";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

const CORPORATE_URL = "https://www.dhp-dev.jp";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = await getDictionary(locale as Locale);
  return { title: dict.contact.title, description: dict.contact.subtitle };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <PageHeader label={dict.contact.label} title={dict.contact.title} subtitle={dict.contact.subtitle} />
      <section className="pb-32 lg:pb-44 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <div className="mb-12">
                <p className="label-editorial text-muted/40 mb-5">{dict.contact.categoryLabel}</p>
                <ul className="space-y-3">
                  {dict.contact.categories.map((item: string) => (
                    <li key={item} className="text-[13px] text-muted/70 flex items-center gap-3">
                      <span className="w-1 h-1 bg-brand-red/40 rounded-full" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-10 border-t border-border">
                <p className="text-[13px] text-muted/50 leading-[2]">
                  株式会社dhp都市開発<br />〒541-0058<br />大阪市中央区南久宝寺町4丁目5番12号<br />アップウェル心斎橋 2F
                </p>
                <div className="mt-3"><span className="text-[13px] text-muted/50">TEL 06-6253-8262</span></div>
                <div className="mt-6">
                  <a href={CORPORATE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-muted/50 hover:text-brand-red transition-colors duration-300">
                    {dict.common.corporateSite}
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ContactForm dict={dict} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

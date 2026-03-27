import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { getFeaturedProjects, getAllProjects, getAllCategories, preloadLocaleData } from "@/lib/projects";
import HomeClient from "./HomeClient";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  await preloadLocaleData(locale as Locale);
  const dict = await getDictionary(locale as Locale);
  const featured = getFeaturedProjects(locale as Locale);
  const all = getAllProjects(locale as Locale);
  const categories = getAllCategories(locale as Locale);

  return (
    <HomeClient
      locale={locale as Locale}
      dict={dict}
      featuredProjects={featured}
      allProjects={all}
      categories={categories}
    />
  );
}

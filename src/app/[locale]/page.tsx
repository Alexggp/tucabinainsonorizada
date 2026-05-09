import MainPage from "@/src/site/content/MainPage/MainPage";
import { getLocaleOrDefault, locales } from "@/src/site/i18n/config";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  return <MainPage locale={getLocaleOrDefault(locale)} />;
}


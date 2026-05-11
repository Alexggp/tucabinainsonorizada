import MainPage from "@/src/site/content/MainPage/MainPage";
import { defaultLocale } from "@/src/site/i18n/config";

export default function HomePage() {
  return <MainPage locale={defaultLocale} />;
}

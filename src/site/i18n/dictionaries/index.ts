import en from "./en";
import es from "./es";
import { defaultLocale, Locale } from "../config";

const dictionaries = {
  en,
  es
};

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries[defaultLocale];
}

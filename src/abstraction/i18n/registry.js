import { de } from "./locales/de.js";
import { en } from "./locales/en.js";
import { es } from "./locales/es.js";
import { fr } from "./locales/fr.js";
import { id } from "./locales/id.js";
import { ja } from "./locales/ja.js";
import { ko } from "./locales/ko.js";
import { ptBR } from "./locales/pt-BR.js";
import { vi } from "./locales/vi.js";
import { zhCN } from "./locales/zh-CN.js";

export const LOCALES = {
  de,
  en,
  es,
  fr,
  id,
  ja,
  ko,
  "pt-BR": ptBR,
  vi,
  "zh-CN": zhCN,
};

export const LOCALE_INFO = {
  vi: { id: "vi", code: "VI", name: "Tiếng Việt", htmlLang: "vi", docsLocale: "vi-VN", dir: "ltr" },
  en: { id: "en", code: "EN", name: "English", htmlLang: "en", docsLocale: "en-US", dir: "ltr" },
  de: { id: "de", code: "DE", name: "Deutsch", htmlLang: "de", docsLocale: "de-DE", dir: "ltr" },
  es: { id: "es", code: "ES", name: "Español", htmlLang: "es", docsLocale: "es-ES", dir: "ltr" },
  fr: { id: "fr", code: "FR", name: "Français", htmlLang: "fr", docsLocale: "fr-FR", dir: "ltr" },
  id: { id: "id", code: "ID", name: "Bahasa Indonesia", htmlLang: "id", docsLocale: "id-ID", dir: "ltr" },
  ja: { id: "ja", code: "JA", name: "日本語", htmlLang: "ja", docsLocale: "ja-JP", dir: "ltr" },
  ko: { id: "ko", code: "KO", name: "한국어", htmlLang: "ko", docsLocale: "ko-KR", dir: "ltr" },
  "pt-BR": { id: "pt-BR", code: "PT", name: "Português do Brasil", htmlLang: "pt-BR", docsLocale: "pt-BR", dir: "ltr" },
  "zh-CN": { id: "zh-CN", code: "ZH", name: "简体中文", htmlLang: "zh-CN", docsLocale: "zh-CN", dir: "ltr" },
};

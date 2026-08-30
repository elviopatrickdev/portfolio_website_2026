import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { en } from './locales/en'
import { pt } from './locales/pt'

export const LANGUAGE_STORAGE_KEY =
  'elvio-portfolio-language'

export const defaultNS = 'translation' as const

export const resources = {
  pt: {
    translation: pt,
  },
  en: {
    translation: en,
  },
} as const

function updateDocumentLanguage(language: string): void {
  document.documentElement.lang = language.startsWith('en')
    ? 'en'
    : 'pt-PT'
}

i18n.on('languageChanged', updateDocumentLanguage)

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS,
    ns: [defaultNS],

    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en'],
    load: 'languageOnly',

    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  })

export default i18n
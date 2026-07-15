import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import hi from '@/locales/hi.json'

const messages = { en, hi }

const STORAGE_KEY = 'babelize-locale'
const savedLocale = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
const defaultLocale = savedLocale && messages[savedLocale] ? savedLocale : 'en'

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages
})

export function setLocale(locale) {
  i18n.global.locale.value = locale
  try { localStorage.setItem(STORAGE_KEY, locale) } catch {}
}

export function t(key) {
  return i18n.global.t(key)
}

export default i18n

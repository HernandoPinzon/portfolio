import type { Language } from '../constants/site';
import { SITE_CONFIG } from '../constants/site';
import { translations } from '../constants/translations';

/**
 * Get the current language from the URL path
 * @param pathname - The current pathname (e.g., "/en" or "/")
 * @returns The detected language or default language
 */
export function getCurrentLang(pathname: string): Language {
  const pathLang = pathname.split('/')[1];
  if (SITE_CONFIG.languages.includes(pathLang as Language)) {
    return pathLang as Language;
  }
  return SITE_CONFIG.defaultLanguage;
}

/**
 * Get translation for a specific key and language
 * @param key - Translation key
 * @param lang - Target language
 * @returns Translated string or key if not found
 */
export function t(key: string, lang: Language): string {
  return translations[key]?.[lang] ?? key;
}

/**
 * Get the alternate language URL
 * @param currentPath - Current pathname
 * @param targetLang - Target language
 * @returns New path for the target language
 */
export function getAlternateLangUrl(currentPath: string, targetLang: Language): string {
  const currentLang = getCurrentLang(currentPath);

  if (targetLang === SITE_CONFIG.defaultLanguage) {
    // If switching to default language, remove language prefix
    if (currentLang !== SITE_CONFIG.defaultLanguage) {
      return currentPath.replace(`/${currentLang}`, '') || '/';
    }
    return currentPath;
  }

  // If switching to non-default language
  if (currentLang === SITE_CONFIG.defaultLanguage) {
    return `/${targetLang}${currentPath === '/' ? '' : currentPath}`;
  }

  // Switch between non-default languages
  return currentPath.replace(`/${currentLang}`, `/${targetLang}`);
}

/**
 * Get the opposite language from current
 * @param currentLang - Current language
 * @returns The opposite language
 */
export function getOppositeLang(currentLang: Language): Language {
  return currentLang === 'en' ? 'es' : 'en';
}

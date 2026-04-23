export type Locale = 'en' | 'zh';

export const DEFAULT_LOCALE: Locale = 'en';

export function pathWithLocale(locale: Locale, path: string): string {
  const normalized = normalizePath(path);
  if (locale === 'zh') {
    return normalized === '/' ? '/zh' : `/zh${normalized}`;
  }
  return normalized;
}

export function switchLocalePath(targetLocale: Locale, currentPath: string): string {
  return pathWithLocale(targetLocale, currentPath);
}

function normalizePath(path: string): string {
  if (!path || path === '') return '/';
  if (path === '/zh') return '/';
  if (path.startsWith('/zh/')) {
    const trimmed = path.slice(3);
    return trimmed === '' ? '/' : trimmed;
  }
  return path.startsWith('/') ? path : `/${path}`;
}

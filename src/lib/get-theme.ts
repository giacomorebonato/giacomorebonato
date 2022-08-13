export const DEFAULT_THEME = 'light'
export const STORAGE_THEME_KEY = 'theme'
export const getTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  }

  return 'light'
}

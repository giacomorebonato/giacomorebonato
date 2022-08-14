let theme = 'light'

if (typeof window !== 'undefined') {
  theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'

  document.documentElement.dataset.theme = theme
}

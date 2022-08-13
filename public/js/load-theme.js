let theme = 'light'

if (typeof window !== 'undefined') {
  theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
}

if (theme === 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

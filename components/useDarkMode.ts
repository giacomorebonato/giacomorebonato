import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const getDarkFromHtml = () => {
  if (typeof document === 'undefined') {
    return false
  }

  const html = document.getElementsByTagName('html')[0]!
  return html.classList.contains('dark')
}

const toggleDarkMode = (makeDark: boolean) => {
  const html = document.getElementsByTagName('html')[0]!
  if (makeDark) {
    html.classList.add('dark')
    localStorage.darkMode = true
  } else {
    html.classList.remove('dark')
    localStorage.darkMode = false
  }
}

export const useDarkMode = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isDark, setDarkMode] = useState<boolean>(getDarkFromHtml())

  useEffect(() => {
    if (isDark !== getDarkFromHtml()) {
      toggleDarkMode(isDark)
    }
  }, [isDark])

  return [isDark, setDarkMode]
}

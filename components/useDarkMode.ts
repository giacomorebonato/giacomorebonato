import { Dispatch, SetStateAction, useEffect, useState } from 'react'

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

const getDarkModeSetting = () => {
  if (!process.browser) {
    return false
  }

  return localStorage.getItem('darkMode') === 'true'
}

export const useDarkMode = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const savedState = getDarkModeSetting()
  const [isDark, setDarkMode] = useState(savedState)

  useEffect(() => {
    toggleDarkMode(isDark)
  }, [isDark])

  return [isDark, setDarkMode]
}

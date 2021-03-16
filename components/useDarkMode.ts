import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const getHtml = (): HTMLHtmlElement | undefined => {
  if (typeof document === 'undefined') {
    return
  }

  return document.getElementsByTagName('html')[0]!
}

const isHtmlDark = () => {
  return getHtml()?.classList.contains('dark')
}

const toggleDarkMode = (makeDark: boolean) => {
  const html = getHtml()

  if (!html) return

  html.classList[makeDark ? 'add' : 'remove']('dark')
  localStorage.darkMode = makeDark
}

export const useDarkMode = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isDark, setDarkMode] = useState<boolean>(isHtmlDark())

  useEffect(() => {
    if (isDark !== isHtmlDark()) {
      toggleDarkMode(isDark)
    }
  }, [isDark])

  return [isDark, setDarkMode]
}

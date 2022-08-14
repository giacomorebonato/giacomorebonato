import * as React from 'react'
import { Swap } from 'react-daisyui'
import { FaMoon, FaSun } from 'react-icons/fa'
import { getTheme, STORAGE_THEME_KEY } from '../lib/get-theme'
export const ColorModeSwitcher: React.FC = () => {
  const [theme, setTheme] = React.useState(getTheme())

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(STORAGE_THEME_KEY, theme)

    console.log(document.documentElement.dataset)
  }, [theme])

  return (
    <Swap
      className='text-lg ml-2'
      onElement={<FaMoon />}
      offElement={<FaSun />}
      onChange={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    />
  )
}

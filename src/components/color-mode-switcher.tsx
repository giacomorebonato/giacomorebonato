import * as React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { DEFAULT_THEME, getTheme, STORAGE_THEME_KEY } from '../lib/get-theme'

export const ColorModeSwitcher: React.FC = () => {
  const [theme, setTheme] = React.useState(getTheme())

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(STORAGE_THEME_KEY, theme)
  }, [theme])

  return (
    <label className='swap text-lg ml-2'>
      <input
        type='checkbox'
        onChange={(e) => {
          setTheme(e.target.checked ? DEFAULT_THEME : 'dark')
        }}
        checked={theme === DEFAULT_THEME}
      />
      <div className='swap-on'>
        <FaMoon />
      </div>
      <div className='swap-off'>
        <FaSun />
      </div>
    </label>
  )
}

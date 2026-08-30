import { useEffect, useState } from 'react'
import type { Theme } from '../types/theme'
import { applyTheme, getInitialTheme } from '../utils/theme'

type UseThemeResult = {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme(): UseThemeResult {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  function toggleTheme(): void {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark',
    )
  }

  return {
    theme,
    toggleTheme,
  }
}
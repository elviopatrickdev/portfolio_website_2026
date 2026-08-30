import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

interface ThemeToggleProps {
  enableLightLabel: string
  enableDarkLabel: string
}

export function ThemeToggle({
  enableLightLabel,
  enableDarkLabel,
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  const isDarkTheme = theme === 'dark'

  const buttonLabel = isDarkTheme
    ? enableLightLabel
    : enableDarkLabel

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={buttonLabel}
      title={buttonLabel}
      onClick={toggleTheme}
    >
      {isDarkTheme ? (
        <Moon aria-hidden="true" size={18} strokeWidth={1.8} />
      ) : (
        <Sun aria-hidden="true" size={18} strokeWidth={1.8} />
      )}
    </button>
  )
}
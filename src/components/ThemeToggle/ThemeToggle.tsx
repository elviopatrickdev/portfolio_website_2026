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
      className="inline-grid size-[38px] shrink-0 cursor-pointer place-items-center rounded-md border border-border-strong bg-surface p-0 text-primary-bright shadow-[0_8px_24px_rgba(0,0,0,0.14)] transition-[color,background-color,border-color,transform] duration-200 hover:-translate-y-px hover:border-accent hover:bg-surface-secondary hover:text-accent active:scale-95 [&_svg]:size-[18px] [&_svg]:transition-transform hover:[&_svg]:rotate-[8deg]"
      aria-label={buttonLabel}
      title={buttonLabel}
      onClick={toggleTheme}
    >
      {isDarkTheme ? (
        <Moon aria-hidden="true" strokeWidth={1.8} />
      ) : (
        <Sun aria-hidden="true" strokeWidth={1.8} />
      )}
    </button>
  )
}
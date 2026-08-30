import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { THEME_STORAGE_KEY } from '../../utils/theme'
import { ThemeToggle } from './ThemeToggle'

const lightLabel = 'Ativar tema claro'
const darkLabel = 'Ativar tema escuro'

function renderThemeToggle() {
  return render(
    <ThemeToggle
      enableLightLabel={lightLabel}
      enableDarkLabel={darkLabel}
    />,
  )
}

beforeEach(() => {
  window.localStorage.clear()
  document.documentElement.removeAttribute('data-theme')
})

describe('ThemeToggle', () => {
  it('inicia no tema dark', () => {
    renderThemeToggle()

    expect(
      screen.getByRole('button', {
        name: lightLabel,
      }),
    ).toBeInTheDocument()

    expect(document.documentElement).toHaveAttribute(
      'data-theme',
      'dark',
    )
  })

  it('altera para o tema light ao clicar', async () => {
    const user = userEvent.setup()

    renderThemeToggle()

    const themeButton = screen.getByRole('button', {
      name: lightLabel,
    })

    await user.click(themeButton)

    expect(
      screen.getByRole('button', {
        name: darkLabel,
      }),
    ).toBeInTheDocument()

    expect(document.documentElement).toHaveAttribute(
      'data-theme',
      'light',
    )

    expect(
      window.localStorage.getItem(THEME_STORAGE_KEY),
    ).toBe('light')
  })

  it('respeita o tema light anteriormente guardado', () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, 'light')

    renderThemeToggle()

    expect(
      screen.getByRole('button', {
        name: darkLabel,
      }),
    ).toBeInTheDocument()

    expect(document.documentElement).toHaveAttribute(
      'data-theme',
      'light',
    )
  })
})
import {
  render,
  screen,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'
import i18n, {
  LANGUAGE_STORAGE_KEY,
} from '../../i18n/i18n'
import { LanguageSwitcher } from './LanguageSwitcher'

describe('LanguageSwitcher', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('pt')
    window.localStorage.clear()
    document.documentElement.lang = 'pt-PT'
  })

  it('mostra o idioma atual com o menu fechado', () => {
    render(<LanguageSwitcher />)

    const trigger = screen.getByRole('button', {
      name: 'Selecionar idioma',
    })

    expect(trigger).toHaveTextContent('PT')
    expect(trigger).toHaveAttribute(
      'aria-expanded',
      'false',
    )

    expect(
      screen.queryByRole('button', {
        name: /English/i,
      }),
    ).not.toBeInTheDocument()
  })

  it('abre o menu com as opções de idioma', async () => {
    const user = userEvent.setup()

    render(<LanguageSwitcher />)

    const trigger = screen.getByRole('button', {
      name: 'Selecionar idioma',
    })

    await user.click(trigger)

    expect(trigger).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    expect(
      screen.getByRole('button', {
        name: /Português/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /English/i,
      }),
    ).toBeInTheDocument()
  })

  it('altera o idioma para inglês e guarda a escolha', async () => {
    const user = userEvent.setup()

    render(<LanguageSwitcher />)

    await user.click(
      screen.getByRole('button', {
        name: 'Selecionar idioma',
      }),
    )

    await user.click(
      screen.getByRole('button', {
        name: /English/i,
      }),
    )

    const trigger = await screen.findByRole('button', {
      name: 'Select language',
    })

    expect(trigger).toHaveTextContent('EN')
    expect(trigger).toHaveAttribute(
      'aria-expanded',
      'false',
    )

    expect(i18n.resolvedLanguage).toBe('en')

    expect(document.documentElement).toHaveAttribute(
      'lang',
      'en',
    )

    expect(
      window.localStorage.getItem(
        LANGUAGE_STORAGE_KEY,
      ),
    ).toBe('en')
  })

  it('fecha o menu com a tecla Escape', async () => {
    const user = userEvent.setup()

    render(<LanguageSwitcher />)

    const trigger = screen.getByRole('button', {
      name: 'Selecionar idioma',
    })

    await user.click(trigger)

    expect(trigger).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await user.keyboard('{Escape}')

    expect(trigger).toHaveAttribute(
      'aria-expanded',
      'false',
    )

    expect(trigger).toHaveFocus()
  })
})
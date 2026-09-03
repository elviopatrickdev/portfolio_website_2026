import {
  render,
  screen,
  within,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'
import App from './App'
import i18n from './i18n/i18n'

beforeEach(async () => {
  window.localStorage.clear()
  document.documentElement.removeAttribute('data-theme')

  await i18n.changeLanguage('pt')
})

describe('App', () => {
  it('renderiza a Hero dentro do conteúdo principal', () => {
    render(<App />)

    const main = screen.getByRole('main')

    expect(
      within(main).getByRole('heading', {
        level: 1,
        name: 'Frontend Developer',
      }),
    ).toBeInTheDocument()
  })

  it('renderiza o cabeçalho com os controlos de tema e idioma', () => {
    render(<App />)

    const header = screen.getByRole('banner')

    expect(header).toBeInTheDocument()

    expect(
      within(header).getByRole('button', {
        name: 'Ativar tema claro',
      }),
    ).toBeInTheDocument()

    expect(
      within(header).getByRole('button', {
        name: 'Selecionar idioma',
      }),
    ).toBeInTheDocument()
  })

  it('traduz a Hero através do seletor de idiomas do cabeçalho', async () => {
    const user = userEvent.setup()

    render(<App />)

    const header = screen.getByRole('banner')

    const hero = screen.getByRole('region', {
      name: 'Frontend Developer',
    })

    expect(
      within(hero).getByRole('link', {
        name: 'Falar comigo',
      }),
    ).toBeInTheDocument()

    await user.click(
      within(header).getByRole('button', {
        name: 'Selecionar idioma',
      }),
    )

    await user.click(
      within(header).getByRole('button', {
        name: /English/i,
      }),
    )

    expect(
      await within(hero).findByRole('link', {
        name: 'Get in touch',
      }),
    ).toHaveAttribute('href', '#contacto')

    expect(
      within(hero).getByRole('link', {
        name: 'View projects',
      }),
    ).toHaveAttribute('href', '#projetos')

    expect(
      within(hero).queryByRole('link', {
        name: 'Falar comigo',
      }),
    ).not.toBeInTheDocument()
  })
})
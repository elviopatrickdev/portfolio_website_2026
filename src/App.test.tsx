import {
  render,
  screen,
} from '@testing-library/react'
import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'
import i18n from './i18n/i18n'
import App from './App'

describe('App', () => {
  beforeEach(async () => {
    window.localStorage.clear()
    await i18n.changeLanguage('pt')
  })

  it('renderiza o título principal', () => {
    render(<App />)

    const heading = screen.getByRole('heading', {
      level: 1,
      name: 'Elvio Patrick',
    })

    expect(heading).toBeInTheDocument()
  })

  it('renderiza o cabeçalho com os seletores', () => {
    render(<App />)

    expect(
      screen.getByRole('banner'),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: 'Ativar tema claro',
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: 'Selecionar idioma',
      }),
    ).toBeInTheDocument()
  })
})
import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import i18n from '../../i18n/i18n'
import { Hero } from './Hero'

beforeEach(async () => {
  window.localStorage.clear()
  await i18n.changeLanguage('pt')
})

describe('Hero', () => {
  it('renderiza o título principal na secção inicial', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Frontend Developer',
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('region', {
        name: 'Frontend Developer',
      }),
    ).toHaveAttribute('id', 'inicio')
  })

  it('apresenta a descrição, experiência e localização em português', () => {
    render(<Hero />)

    expect(
      screen.getByText(/Sou Elvio Patrick,/i),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/1\+ ano de experiência prática/i),
    ).toBeInTheDocument()

    expect(
      screen.getByText('Portugal'),
    ).toBeInTheDocument()
  })

  it('apresenta os links para contacto e projetos', () => {
    render(<Hero />)

    expect(
      screen.getByRole('link', {
        name: 'Falar comigo',
      }),
    ).toHaveAttribute('href', '#contacto')

    expect(
      screen.getByRole('link', {
        name: 'Ver projetos',
      }),
    ).toHaveAttribute('href', '#projetos')
  })

  it('apresenta os textos em inglês quando esse idioma está ativo', async () => {
    await i18n.changeLanguage('en')

    render(<Hero />)

    expect(
      screen.getByText(/I'm Elvio Patrick,/i),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/1\+ year of hands-on experience/i),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: 'Get in touch',
      }),
    ).toHaveAttribute('href', '#contacto')

    expect(
      screen.getByRole('link', {
        name: 'View projects',
      }),
    ).toHaveAttribute('href', '#projetos')
  })
})
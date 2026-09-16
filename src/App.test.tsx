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
  it('renderiza a Hero e o Processo no conteúdo principal', () => {
    render(<App />)

    const main = screen.getByRole('main')

    expect(
      within(main).getByRole('heading', {
        level: 1,
        name: 'Frontend Developer',
      }),
    ).toBeInTheDocument()

    expect(
      within(main).getByRole('region', {
        name: 'Da ideia ao produto pronto para evoluir.',
      }),
    ).toHaveAttribute('id', 'processo')
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

  it('traduz a Hero e o Processo através do seletor de idiomas', async () => {
    const user = userEvent.setup()

    render(<App />)

    const main = screen.getByRole('main')
    const header = screen.getByRole('banner')

    const hero = within(main).getByRole('region', {
      name: 'Frontend Developer',
    })

    const processSection = within(main).getByRole(
      'region',
      {
        name: 'Da ideia ao produto pronto para evoluir.',
      },
    )

    expect(
      within(hero).getByRole('link', {
        name: 'Falar comigo',
      }),
    ).toBeInTheDocument()

    expect(
      within(processSection).getByRole('heading', {
        level: 3,
        name: 'Entender o problema',
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

    const translatedProcessSection =
      await within(main).findByRole('region', {
        name: 'From idea to a product ready to evolve.',
      })

    expect(
      within(translatedProcessSection).getByRole(
        'heading',
        {
          level: 3,
          name: 'Understand the problem',
        },
      ),
    ).toBeInTheDocument()

    expect(
      within(translatedProcessSection).getByRole(
        'img',
        {
          name: 'Development process map',
        },
      ),
    ).toBeInTheDocument()
  })
})
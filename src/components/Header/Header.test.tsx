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
import i18n from '../../i18n/i18n'
import { Header } from './Header'

function getMobileNavigation(): HTMLElement {
  const button = screen.getByRole('button', {
    name: /menu de navegação/i,
  })

  const navigationId = button.getAttribute('aria-controls')

  if (!navigationId) {
    throw new Error('O botão precisa de aria-controls.')
  }

  const navigation = document.getElementById(navigationId)

  if (!navigation) {
    throw new Error('A navegação mobile não foi encontrada.')
  }

  return navigation
}

describe('Header', () => {
  beforeEach(async () => {
    window.localStorage.clear()
    await i18n.changeLanguage('pt')
  })

  it('mantém o menu mobile fechado inicialmente', () => {
    render(<Header />)

    const button = screen.getByRole('button', {
      name: 'Abrir menu de navegação',
    })

    expect(button).toHaveAttribute('aria-expanded', 'false')

    expect(getMobileNavigation()).not.toBeVisible()
  })

  it('abre e fecha o menu através do botão', async () => {
    const user = userEvent.setup()

    render(<Header />)

    const button = screen.getByRole('button', {
      name: 'Abrir menu de navegação',
    })

    const navigation = getMobileNavigation()

    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(button).toHaveAccessibleName(
      'Fechar menu de navegação',
    )
    expect(navigation).toBeVisible()

    const projectsLink = within(navigation).getByRole(
      'link',
      {
        name: 'Projetos',
      },
    )

    expect(projectsLink).toHaveAttribute('href', '#projetos')

    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAccessibleName(
      'Abrir menu de navegação',
    )
    expect(navigation).not.toBeVisible()
  })

  it('fecha o menu ao selecionar um link', async () => {
    const user = userEvent.setup()

    render(<Header />)

    const button = screen.getByRole('button', {
      name: 'Abrir menu de navegação',
    })

    const navigation = getMobileNavigation()

    await user.click(button)

    await user.click(
      within(navigation).getByRole('link', {
        name: 'Projetos',
      }),
    )

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(navigation).not.toBeVisible()
  })

  it('fecha com Escape e devolve o foco ao botão', async () => {
    const user = userEvent.setup()

    render(<Header />)

    const button = screen.getByRole('button', {
      name: 'Abrir menu de navegação',
    })

    const navigation = getMobileNavigation()

    await user.click(button)
    await user.tab()

    expect(
      within(navigation).getByRole('link', {
        name: 'Início',
      }),
    ).toHaveFocus()

    await user.keyboard('{Escape}')

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(navigation).not.toBeVisible()
    expect(button).toHaveFocus()
  })

  it('fecha ao clicar fora do cabeçalho', async () => {
    const user = userEvent.setup()

    render(
      <>
        <Header />

        <button type="button">
          Fora do cabeçalho
        </button>
      </>,
    )

    const button = screen.getByRole('button', {
      name: 'Abrir menu de navegação',
    })

    const navigation = getMobileNavigation()

    await user.click(button)

    expect(navigation).toBeVisible()

    await user.click(
      screen.getByRole('button', {
        name: 'Fora do cabeçalho',
      }),
    )

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(navigation).not.toBeVisible()
  })
})
import {
  render,
  screen,
  within,
} from '@testing-library/react'
import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'
import i18n from '../../i18n/i18n'
import { ProcessSection } from './ProcessSection'

beforeEach(async () => {
  window.localStorage.clear()
  await i18n.changeLanguage('pt')
})

describe('ProcessSection', () => {
  it('renderiza as quatro etapas na ordem correta', () => {
    render(<ProcessSection />)

    const section = screen.getByRole('region', {
      name: 'Da ideia ao produto pronto para evoluir.',
    })

    expect(section).toHaveAttribute(
      'id',
      'processo',
    )

    const cards = within(section).getAllByRole(
      'article',
    )

    expect(cards).toHaveLength(4)

    const cardTitles = cards.map((card) =>
      within(card)
        .getByRole('heading', { level: 3 })
        .textContent,
    )

    expect(cardTitles).toEqual([
      'Entender o problema',
      'Desenhar a experiência',
      'Construir e integrar',
      'Testar e entregar',
    ])

    expect(
      within(section).getByRole('img', {
        name: 'Mapa do processo de desenvolvimento',
      }),
    ).toBeInTheDocument()
  })

  it('apresenta a secção em inglês', async () => {
    await i18n.changeLanguage('en')

    render(<ProcessSection />)

    const section = screen.getByRole('region', {
      name: 'From idea to a product ready to evolve.',
    })

    expect(
      within(section).getByRole('heading', {
        level: 3,
        name: 'Understand the problem',
      }),
    ).toBeInTheDocument()

    expect(
      within(section).getByText('stage / 01'),
    ).toBeInTheDocument()

    expect(
      within(section).getByRole('img', {
        name: 'Development process map',
      }),
    ).toBeInTheDocument()
  })
})
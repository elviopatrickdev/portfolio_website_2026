import {
  render,
  screen,
  within,
} from '@testing-library/react'
import {
  describe,
  expect,
  it,
} from 'vitest'
import { ProcessCard } from './ProcessCard'

describe('ProcessCard', () => {
  it('apresenta uma etapa com título, descrição e etiquetas', () => {
    render(
      <ProcessCard
        number="01"
        stageLabel="etapa"
        title="Entender o problema"
        description="Organizo objetivos, utilizadores e requisitos."
        tags={[
          'objetivos',
          'requisitos',
          'prioridades',
        ]}
      />,
    )

    const card = screen.getByRole('article', {
      name: 'Entender o problema',
    })

    const heading = within(card).getByRole('heading', {
      level: 3,
      name: 'Entender o problema',
    })

    expect(card).toHaveAttribute(
      'aria-labelledby',
      heading.id,
    )

    expect(
      within(card).getByText('etapa / 01'),
    ).toBeInTheDocument()

    expect(
      within(card).getByText(
        'Organizo objetivos, utilizadores e requisitos.',
      ),
    ).toBeInTheDocument()

    const renderedTags = within(card)
      .getAllByRole('listitem')
      .map((tag) => tag.textContent)

    expect(renderedTags).toEqual([
      'objetivos',
      'requisitos',
      'prioridades',
    ])
  })
})
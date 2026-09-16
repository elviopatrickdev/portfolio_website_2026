import {
  render,
  screen,
} from '@testing-library/react'
import {
  describe,
  expect,
  it,
} from 'vitest'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renderiza o conteúdo recebido através das props', () => {
    render(
      <SectionHeading
        headingId="process-title"
        label="Processo de desenvolvimento"
        title="Da ideia ao produto"
        titleHighlight="pronto para evoluir."
        description="Uma abordagem estruturada."
      />,
    )

    const heading = screen.getByRole('heading', {
      level: 2,
      name: 'Da ideia ao produto pronto para evoluir.',
    })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveAttribute(
      'id',
      'process-title',
    )

    expect(
      screen.getByText('Processo de desenvolvimento'),
    ).toBeInTheDocument()

    expect(
      screen.getByText('Uma abordagem estruturada.'),
    ).toBeInTheDocument()
  })
})
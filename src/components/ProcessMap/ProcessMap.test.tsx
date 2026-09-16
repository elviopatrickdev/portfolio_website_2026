import {
  render,
  screen,
} from '@testing-library/react'
import {
  describe,
  expect,
  it,
} from 'vitest'
import { ProcessMap } from './ProcessMap'

describe('ProcessMap', () => {
  it('apresenta o diagrama com uma descrição acessível', () => {
    render(
      <ProcessMap label="Mapa do processo de desenvolvimento" />,
    )

    expect(
      screen.getByRole('img', {
        name: 'Mapa do processo de desenvolvimento',
      }),
    ).toBeInTheDocument()
  })
})
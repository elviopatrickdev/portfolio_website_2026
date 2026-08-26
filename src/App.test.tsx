import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renderiza um título principal', () => {
    render(<App />)

    const heading = screen.getByRole('heading', {
      level: 1,
    })

    expect(heading).toBeInTheDocument()
  })
})
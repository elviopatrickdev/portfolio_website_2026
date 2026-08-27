import { beforeEach, describe, expect, it } from 'vitest'
import {
  applyTheme,
  getInitialTheme,
  THEME_STORAGE_KEY,
} from './theme'

beforeEach(() => {
  window.localStorage.clear()
  document.documentElement.removeAttribute('data-theme')
})

describe('getInitialTheme', () => {
  it('utiliza primeiro o tema guardado', () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, 'light')

    expect(getInitialTheme()).toBe('light')
  })

  it('utiliza dark como tema padrão', () => {
    expect(getInitialTheme()).toBe('dark')
  })

  it('ignora um valor guardado inválido e utiliza dark', () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, 'blue')

    expect(getInitialTheme()).toBe('dark')
  })
})

describe('applyTheme', () => {
  it('aplica o tema ao HTML e guarda a preferência', () => {
    applyTheme('light')

    expect(document.documentElement.dataset.theme).toBe('light')
    expect(
      window.localStorage.getItem(THEME_STORAGE_KEY),
    ).toBe('light')
  })
})
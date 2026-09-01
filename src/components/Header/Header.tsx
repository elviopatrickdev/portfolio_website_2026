import { ArrowUpRight, Menu, X } from 'lucide-react'
import {
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import type { KeyboardEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'

type NavigationLabelKey =
  | 'navigation.home'
  | 'navigation.process'
  | 'navigation.expertise'
  | 'navigation.stack'
  | 'navigation.projects'
  | 'navigation.about'

interface NavigationItem {
  href: `#${string}`
  labelKey: NavigationLabelKey
}

const navigationItems: NavigationItem[] = [
  {
    href: '#inicio',
    labelKey: 'navigation.home',
  },
  {
    href: '#processo',
    labelKey: 'navigation.process',
  },
  {
    href: '#especializacao',
    labelKey: 'navigation.expertise',
  },
  {
    href: '#stack',
    labelKey: 'navigation.stack',
  },
  {
    href: '#projetos',
    labelKey: 'navigation.projects',
  },
  {
    href: '#sobre',
    labelKey: 'navigation.about',
  },
]

export function Header() {
  const { t } = useTranslation('translation')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuId = useId()

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    function handleOutsideInteraction(event: Event): void {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener(
      'pointerdown',
      handleOutsideInteraction,
    )

    document.addEventListener(
      'focusin',
      handleOutsideInteraction,
    )

    return () => {
      document.removeEventListener(
        'pointerdown',
        handleOutsideInteraction,
      )

      document.removeEventListener(
        'focusin',
        handleOutsideInteraction,
      )
    }
  }, [isMenuOpen])

  function closeMenu(): void {
    setIsMenuOpen(false)
  }

  function handleMenuKeyDown(
    event: KeyboardEvent<HTMLElement>,
  ): void {
    if (event.key !== 'Escape' || !isMenuOpen) {
      return
    }

    event.preventDefault()
    event.stopPropagation()

    closeMenu()
    menuButtonRef.current?.focus()
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-border bg-header backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-3">
          <a
            href="#inicio"
            aria-label={`Elvio Patrick — ${t('navigation.home')}`}
            className="flex shrink-0 items-center gap-2.5"
            onClick={closeMenu}
          >
            <span
              aria-hidden="true"
              className="grid size-10 place-items-center rounded-md border border-primary/35 bg-primary/10 text-lg font-bold text-primary-bright"
            >
              EP
            </span>

            <span className="hidden text-sm font-semibold tracking-[0.08em] text-foreground sm:block">
              ELVIO PATRICK
            </span>
          </a>

          <nav
            aria-label={t('navigation.mainLabel')}
            className="hidden xl:block"
          >
            <ul className="flex items-center gap-5">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs font-medium text-muted-foreground transition-colors hover:text-accent"
                    onClick={closeMenu}
                  >
                    {t(item.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle
              enableLightLabel={t('theme.enableLight')}
              enableDarkLabel={t('theme.enableDark')}
            />

            <LanguageSwitcher />

            <a
              href="#contacto"
              className="hidden h-[38px] items-center gap-2 rounded-md bg-primary px-4 text-xs font-semibold text-white transition-colors hover:bg-primary-bright xl:inline-flex"
              onClick={closeMenu}
            >
              {t('navigation.contact')}

              <ArrowUpRight
                aria-hidden="true"
                className="size-4"
                strokeWidth={1.8}
              />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              aria-label={
                isMenuOpen
                  ? t('navigation.closeMenu')
                  : t('navigation.openMenu')
              }
              aria-expanded={isMenuOpen}
              aria-controls={mobileMenuId}
              className="grid size-[38px] cursor-pointer place-items-center rounded-md border border-border bg-surface text-foreground transition-colors hover:border-accent hover:text-accent xl:hidden"
              onClick={() => {
                setIsMenuOpen((open) => !open)
              }}
              onKeyDown={handleMenuKeyDown}
            >
              {isMenuOpen ? (
                <X
                  aria-hidden="true"
                  className="size-5"
                  strokeWidth={1.8}
                />
              ) : (
                <Menu
                  aria-hidden="true"
                  className="size-5"
                  strokeWidth={1.8}
                />
              )}
            </button>
          </div>
        </div>

        <nav
          id={mobileMenuId}
          aria-label={t('navigation.mainLabel')}
          hidden={!isMenuOpen}
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border py-4 xl:hidden"
          onKeyDown={handleMenuKeyDown}
        >
          <ul className="space-y-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-secondary hover:text-accent"
                  onClick={closeMenu}
                >
                  {t(item.labelKey)}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="mt-3 flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-bright"
            onClick={closeMenu}
          >
            {t('navigation.contact')}

            <ArrowUpRight
              aria-hidden="true"
              className="size-4"
              strokeWidth={1.8}
            />
          </a>
        </nav>
      </div>
    </header>
  )
}
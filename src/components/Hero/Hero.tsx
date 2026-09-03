import { ArrowRight, Code2, MapPin } from 'lucide-react'
import { useId } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { HeroVisual } from './HeroVisual'

export function Hero() {
  const { t } = useTranslation('translation')
  const headingId = useId()

  return (
    <section
      id="inicio"
      aria-labelledby={headingId}
      className="relative isolate overflow-hidden bg-background py-16 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-size-[80px_80px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 -z-10 size-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:px-8 xl:gap-16">
        <div className="min-w-0">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-md border border-border-strong bg-surface text-accent">
              <Code2
                aria-hidden="true"
                className="size-6"
                strokeWidth={1.5}
              />
            </span>

            <span
              aria-hidden="true"
              className="h-px w-8 shrink-0 bg-primary sm:w-14"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              {t('hero.experience')}
            </p>
          </div>

          <h1
            id={headingId}
            className="mt-8 text-5xl leading-[0.95] font-bold tracking-[-0.045em] text-foreground sm:text-7xl lg:text-[clamp(4rem,7vw,5.5rem)]"
          >
            <span className="block">
              {t('hero.title')}
            </span>
            {' '}
            <span className="block bg-linear-to-r from-foreground via-primary-bright to-accent bg-clip-text text-transparent">
              {t('hero.titleHighlight')}
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            <Trans
              ns="translation"
              i18nKey="hero.description"
              components={{
                strong: (
                  <strong className="font-semibold text-foreground" />
                ),
              }}
            />
          </p>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin
              aria-hidden="true"
              className="size-4 shrink-0 text-accent"
              strokeWidth={1.8}
            />

            {t('hero.location')}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors duration-200 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none"
            >
              {t('hero.contact')}

              <ArrowRight
                aria-hidden="true"
                className="size-4"
                strokeWidth={1.8}
              />
            </a>

            <a
              href="#projetos"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-border-strong bg-surface px-6 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none"
            >
              {t('hero.viewProjects')}
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
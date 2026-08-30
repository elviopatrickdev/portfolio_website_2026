import {
  Check,
  ChevronDown,
  Languages,
} from 'lucide-react'
import {
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import { useTranslation } from 'react-i18next'
import type { Language } from '../../types/language'

type LanguageLabelKey =
  | 'language.portuguese'
  | 'language.english'

interface LanguageOption {
  code: Language
  labelKey: LanguageLabelKey
}

const languageOptions: LanguageOption[] = [
  {
    code: 'pt',
    labelKey: 'language.portuguese',
  },
  {
    code: 'en',
    labelKey: 'language.english',
  },
]

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation('translation')
  const [isOpen, setIsOpen] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const optionsId = useId()

  const currentLanguage: Language =
    i18n.resolvedLanguage === 'en' ? 'en' : 'pt'

  useEffect(() => {
    if (!isOpen) {
      return
    }

    function handleMouseDown(event: MouseEvent): void {
      if (
        event.target instanceof Node &&
        !containerRef.current?.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener(
      'mousedown',
      handleMouseDown,
    )

    document.addEventListener(
      'keydown',
      handleKeyDown,
    )

    return () => {
      document.removeEventListener(
        'mousedown',
        handleMouseDown,
      )

      document.removeEventListener(
        'keydown',
        handleKeyDown,
      )
    }
  }, [isOpen])

  async function chooseLanguage(
    language: Language,
  ): Promise<void> {
    await i18n.changeLanguage(language)
    setIsOpen(false)
    triggerRef.current?.focus()
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        className="flex h-[38px] min-w-[104px] cursor-pointer items-center gap-2 rounded-md border border-border bg-surface px-2.5 text-foreground shadow-[0_8px_24px_rgba(0,0,0,0.14)] transition-[color,background-color,border-color] duration-200 hover:border-accent hover:bg-surface-secondary"
        aria-label={t('language.selectLanguage')}
        aria-expanded={isOpen}
        aria-controls={optionsId}
        onClick={() => {
          setIsOpen((open) => !open)
        }}
      >
        <span className="grid size-5 place-items-center rounded-full border border-accent/30 text-accent">
          <Languages
            aria-hidden="true"
            className="size-3"
            strokeWidth={1.8}
          />
        </span>

        <span className="flex flex-col items-start leading-none">
          <span className="text-[7px] uppercase tracking-[0.12em] text-muted-foreground">
            {t('language.label')}
          </span>

          <strong className="mt-1 text-[10px] tracking-[0.08em] text-foreground">
            {currentLanguage.toUpperCase()}
          </strong>
        </span>

        <ChevronDown
          aria-hidden="true"
          className={`ml-auto size-3 text-muted-foreground transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          strokeWidth={1.8}
        />
      </button>

      {isOpen && (
        <div
          id={optionsId}
          className="absolute top-[calc(100%+9px)] right-0 z-50 w-44 rounded-lg border border-border bg-surface p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          aria-label={t('language.selectLanguage')}
        >
          {languageOptions.map((option) => {
            const isSelected =
              currentLanguage === option.code

            return (
              <button
                key={option.code}
                type="button"
                className={`grid w-full cursor-pointer grid-cols-[32px_1fr_16px] items-center rounded-md px-2.5 py-2.5 text-left transition-colors duration-200 ${
                  isSelected
                    ? 'bg-primary/15 text-foreground'
                    : 'text-muted-foreground hover:bg-primary/10 hover:text-foreground'
                }`}
                aria-pressed={isSelected}
                onClick={() => {
                  void chooseLanguage(option.code)
                }}
              >
                <span className="text-[9px] font-semibold tracking-[0.1em] text-primary-bright">
                  {option.code.toUpperCase()}
                </span>

                <strong className="text-[11px] font-semibold">
                  {t(option.labelKey)}
                </strong>

                {isSelected && (
                  <Check
                    aria-hidden="true"
                    className="size-3.5 text-success"
                    strokeWidth={2}
                  />
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
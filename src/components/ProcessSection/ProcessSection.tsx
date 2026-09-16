import { useTranslation } from 'react-i18next'
import type { ProcessStepTranslation } from '../../types/translations'
import { ProcessCard } from '../ProcessCard/ProcessCard'
import { ProcessMap } from '../ProcessMap/ProcessMap'
import { SectionHeading } from '../SectionHeading/SectionHeading'

interface ProcessStep extends ProcessStepTranslation {
  number: string
}

export function ProcessSection() {
  const { t } = useTranslation('translation')

  const steps: ProcessStep[] = [
    {
      number: '01',
      ...t('process.steps.understand', {
        returnObjects: true,
      }),
    },
    {
      number: '02',
      ...t('process.steps.design', {
        returnObjects: true,
      }),
    },
    {
      number: '03',
      ...t('process.steps.build', {
        returnObjects: true,
      }),
    },
    {
      number: '04',
      ...t('process.steps.deliver', {
        returnObjects: true,
      }),
    },
  ]

  return (
    <section
      id="processo"
      aria-labelledby="process-title"
      className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-48 -z-10 size-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="process-title"
          label={t('process.label')}
          title={t('process.title')}
          titleHighlight={t(
            'process.titleHighlight',
          )}
          description={t('process.description')}
        />

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="grid content-start gap-3">
            {steps.map((step) => (
              <ProcessCard
                key={step.number}
                number={step.number}
                stageLabel={t('process.stage')}
                title={step.title}
                description={step.description}
                tags={step.tags}
              />
            ))}
          </div>

          <ProcessMap
            label={t('process.mapLabel')}
          />
        </div>
      </div>
    </section>
  )
}
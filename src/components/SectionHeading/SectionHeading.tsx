interface SectionHeadingProps {
  headingId: string
  label: string
  title: string
  titleHighlight: string
  description: string
}

export function SectionHeading({
  headingId,
  label,
  title,
  titleHighlight,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 grid gap-7 lg:mb-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20">
      <div>
        <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          <span
            aria-hidden="true"
            className="h-px w-6 shrink-0 bg-primary"
          />

          {label}
        </p>

        <h2
          id={headingId}
          className="text-4xl leading-[1.03] font-bold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[4.125rem]"
        >
          <span className="block">
            {title}
          </span>
          {' '}
          <span className="block">
            {titleHighlight}
          </span>
        </h2>
      </div>

      <p className="max-w-sm text-base leading-7 text-muted-foreground lg:justify-self-end">
        {description}
      </p>
    </div>
  )
}
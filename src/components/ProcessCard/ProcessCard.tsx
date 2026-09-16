import { useId } from 'react'

interface ProcessCardProps {
  number: string
  stageLabel: string
  title: string
  description: string
  tags: readonly string[]
}

export function ProcessCard({
  number,
  stageLabel,
  title,
  description,
  tags,
}: ProcessCardProps) {
  const titleId = useId()

  return (
    <article
      aria-labelledby={titleId}
      className="group relative grid min-h-36 grid-cols-[2.25rem_1fr] gap-4 rounded-lg border border-border bg-linear-to-r from-primary/10 via-surface/60 to-transparent p-5 transition-[border-color,background-color] duration-200 hover:border-accent/40 hover:from-primary/15 sm:gap-5 sm:p-6"
    >
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-full border border-border-strong bg-background font-mono text-xs text-accent shadow-[0_0_20px_rgba(47,115,255,0.15)]"
      >
        {number}
      </span>

      <div className="min-w-0">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
          {stageLabel} / {number}
        </p>

        <h3
          id={titleId}
          className="mt-2 text-xl font-semibold tracking-tight text-foreground"
        >
          {title}
        </h3>

        <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">
          {description}
        </p>

        <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-sm border border-border bg-background/50 px-2 py-1 font-mono text-xs uppercase tracking-wide text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
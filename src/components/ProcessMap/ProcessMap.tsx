type ProcessNodePosition =
  | 'left'
  | 'top'
  | 'center'
  | 'bottom'
  | 'right'

interface ProcessNode {
  label: string
  position: ProcessNodePosition
}

interface ProcessMapProps {
  label: string
}

const processNodes: readonly ProcessNode[] = [
  {
    label: 'IDEA',
    position: 'left',
  },
  {
    label: 'UX',
    position: 'top',
  },
  {
    label: 'CODE',
    position: 'center',
  },
  {
    label: 'QA',
    position: 'bottom',
  },
  {
    label: 'SHIP',
    position: 'right',
  },
]

const nodePositionClasses: Record<
  ProcessNodePosition,
  string
> = {
  left: 'top-1/2 left-[7%] -translate-y-1/2',
  top: 'top-[14%] left-1/2 -translate-x-1/2',
  center:
    'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  bottom:
    'bottom-[14%] left-1/2 -translate-x-1/2',
  right: 'top-1/2 right-[7%] -translate-y-1/2',
}

export function ProcessMap({
  label,
}: ProcessMapProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative min-h-[430px] overflow-hidden rounded-lg border border-border-strong bg-card shadow-[inset_0_1px_rgba(255,255,255,0.025)] lg:min-h-[590px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-size-[32px_32px]"
      />

      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
      >
        <div className="absolute inset-x-0 top-0 flex min-h-14 items-center justify-between border-b border-border bg-background/30 px-5 font-mono text-xs tracking-wide">
          <span className="text-muted-foreground">
            product.architecture
          </span>

          <strong className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-success">
            <span className="size-1.5 rounded-full bg-success" />
            ONLINE
          </strong>
        </div>

        <div className="absolute inset-x-0 top-14 bottom-16">
          <span className="absolute top-1/2 right-[16.5%] left-[16.5%] h-px bg-primary/30" />

          <span className="absolute top-[18%] bottom-[18%] left-1/2 w-px bg-primary/30" />

          {processNodes.map((node) => (
            <span
              key={node.position}
              className={`absolute grid h-12 w-14 place-items-center rounded-md border border-border-strong bg-surface/90 font-mono text-xs font-semibold tracking-[0.1em] text-primary-bright shadow-[0_14px_32px_rgba(0,0,0,0.25)] sm:h-14 sm:w-[4.75rem] ${
                nodePositionClasses[node.position]
              }`}
            >
              {node.label}
            </span>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex min-h-16 flex-col justify-center gap-1 border-t border-border bg-background/50 px-5 font-mono text-xs sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <span className="text-muted-foreground">
            objective → interface → code → quality
          </span>

          <strong className="font-medium text-accent">
            useful_product
          </strong>
        </div>
      </div>
    </div>
  )
}
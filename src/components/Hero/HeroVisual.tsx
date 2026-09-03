import { Code2 } from 'lucide-react'

type NodePosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'

interface VisualNode {
  label: string
  position: NodePosition
}

const visualNodes: VisualNode[] = [
  {
    label: 'UI',
    position: 'top-left',
  },
  {
    label: 'API',
    position: 'top-right',
  },
  {
    label: 'DATA',
    position: 'bottom-left',
  },
  {
    label: 'TEST',
    position: 'bottom-right',
  },
]

const nodePositionClasses: Record<NodePosition, string> = {
  'top-left': 'top-2 left-2',
  'top-right': 'top-2 right-2',
  'bottom-left': 'bottom-2 left-2',
  'bottom-right': 'bottom-2 right-2',
}

const developerCode = `interface Developer {
  ui: 'responsive'
  api: 'connected'
  tests: 'reliable'
}`

export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative isolate overflow-hidden rounded-lg border border-border-strong bg-card shadow-[0_24px_80px_rgba(0,0,0,0.16)]"
    >
      <div className="pointer-events-none absolute -top-16 -left-16 size-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-16 -bottom-16 size-56 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative flex min-h-12 items-center justify-between gap-4 border-b border-border px-4 sm:px-5">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-primary" />
          <span className="size-1.5 rounded-full bg-muted-foreground/30" />
          <span className="size-1.5 rounded-full bg-muted-foreground/20" />
        </div>

        <span className="font-mono text-[10px] tracking-wide text-muted-foreground sm:text-xs">
          elvio.engineering.map
        </span>
      </div>

      <div className="relative grid gap-6 px-4 py-8 sm:grid-cols-[1fr_1.1fr] sm:items-center sm:gap-3 sm:px-5 sm:py-12">
        <pre className="min-w-0 overflow-x-auto rounded-md border border-border bg-background/80 p-3 font-mono text-[11px] leading-6 text-muted-foreground sm:p-2.5 xl:text-xs">
          <code>{developerCode}</code>
        </pre>

        <div className="relative mx-auto aspect-square w-full max-w-64">
          <div className="absolute inset-12 rounded-full bg-primary/15 blur-2xl" />

          <div className="absolute inset-5 rounded-full border border-primary/20" />

          <div className="absolute top-1/2 left-0 h-[38%] w-full -translate-y-1/2 -rotate-[20deg] rounded-[50%] border border-primary/20" />

          <div className="absolute top-1/2 right-0 left-0 h-px bg-border" />

          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-border" />

          <div className="absolute top-1/2 left-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-content-center justify-items-center gap-1 rounded-full border border-primary/25 bg-background shadow-[0_0_44px_rgba(47,115,255,0.2)]">
            <Code2
              className="size-7 text-accent"
              strokeWidth={1.5}
            />

            <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
              EP
            </span>
          </div>

          {visualNodes.map((node) => (
            <div
              key={node.label}
              className={`absolute grid size-12 place-items-center border border-border-strong bg-surface/90 font-mono text-xs font-semibold tracking-wide text-primary-bright backdrop-blur-sm ${
                nodePositionClasses[node.position]
              }`}
            >
              {node.label}
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex min-h-12 items-center justify-between gap-4 border-t border-border px-4 font-mono text-xs sm:px-5">
        <span className="text-muted-foreground">
          profile.build()
        </span>

        <span className="flex items-center gap-2 tracking-widest text-success">
          <span className="size-1.5 rounded-full bg-success" />
          READY
        </span>
      </div>
    </div>
  )
}
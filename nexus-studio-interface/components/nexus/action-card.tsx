import type { LucideIcon } from 'lucide-react'
import { MessageCircle } from 'lucide-react'

export interface ActionCardData {
  category: string
  icon: LucideIcon
  badge: string
  title: string
  description: string
  action: string
  buttonText: string
}

export function ActionCard({ data }: { data: ActionCardData }) {
  const Icon = data.icon

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold">
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            {data.badge}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
            {data.category}
          </span>
        </div>

        <h3 className="mt-3 font-serif text-xl leading-tight text-foreground">{data.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{data.description}</p>

        <div className="mt-4 flex gap-2.5 rounded-xl border border-border bg-secondary/60 p-3">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-foreground">{data.action}</p>
        </div>

        <button
          type="button"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3 text-sm font-semibold text-whatsapp-foreground shadow-sm transition-all hover:brightness-105 active:scale-[0.98]"
        >
          <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
          {data.buttonText}
        </button>
      </div>
    </article>
  )
}

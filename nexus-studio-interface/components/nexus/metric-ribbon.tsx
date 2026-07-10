import { Users, Activity } from 'lucide-react'

export function MetricRibbon() {
  const oxigenacao = 68

  return (
    <section
      aria-label="Oxigenação da Carteira"
      className="mx-5 mt-5 grid grid-cols-2 gap-3"
    >
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="h-4 w-4" aria-hidden="true" />
          <span className="text-[11px] font-medium uppercase tracking-wide">Clientes Ativos</span>
        </div>
        <p className="mt-2 font-serif text-2xl leading-none text-foreground">1.240</p>
      </div>

      <div className="rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Activity className="h-4 w-4" aria-hidden="true" />
          <span className="text-[11px] font-medium uppercase tracking-wide">Oxigenação</span>
        </div>
        <p className="mt-2 font-serif text-2xl leading-none text-foreground">{oxigenacao}%</p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gold transition-all"
            style={{ width: `${oxigenacao}%` }}
          />
        </div>
      </div>
    </section>
  )
}

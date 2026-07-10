export function StudioHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-serif text-xl leading-none tracking-tight text-foreground">
            Nexus Studio
          </h1>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-whatsapp" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
              Live Sync Active
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="text-right leading-tight">
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Vendedor</p>
            <p className="text-sm font-medium text-foreground">Lucas</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground ring-2 ring-gold/40">
            LC
          </div>
        </div>
      </div>
    </header>
  )
}

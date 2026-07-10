'use client'

import { useState } from 'react'
import { LayoutList, Users, Settings } from 'lucide-react'

const items = [
  { id: 'feed', label: 'Feed de Ações', icon: LayoutList },
  { id: 'clientes', label: 'Clientes', icon: Users },
  { id: 'config', label: 'Configurações', icon: Settings },
] as const

export function BottomNav() {
  const [active, setActive] = useState<string>('feed')

  return (
    <nav className="sticky bottom-0 z-20 border-t border-border bg-background/90 backdrop-blur-md">
      <ul className="mx-auto flex max-w-md items-stretch justify-around px-2 pb-[env(safe-area-inset-bottom)]">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <li key={item.id} className="flex-1">
              <button
                type="button"
                onClick={() => setActive(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex w-full flex-col items-center gap-1 py-3 transition-colors ${
                  isActive ? 'text-gold' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
